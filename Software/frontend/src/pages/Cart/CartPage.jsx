import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/AppContext';
import { Container, Row, Col } from 'react-bootstrap';
import './CartPage.css';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from "react-icons/fa6";
import api from '../../api/axiosConfig';
import Loader from '../../components/Loader/Loader';

const CartPage = () => {
  const { cartList, setCartList } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      const response = await api.get('/cart', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCartList(response.data.listItems);
      setTotal(response.data.total);
      setLoading(false); // Directly set loading to false after fetching
    } catch (err) {
      console.error('Error fetching cart:', err);
      setLoading(false);
    }
  };

  const handleClearCart = async () => {
    try {
      await api.delete('cart/removeAll', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCartList([]);
    } catch (err) {
      console.error('Error clearing cart:', err);
    }
  };

  const handleRemove = async (productId) => {
    try {
      await api.delete(`cart?cartItemId=${productId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCartList((prevCartList) => prevCartList.filter(product => product.id !== productId));
    } catch (err) {
      console.error('Error removing product:', err);
    }
  };

  const handleChangeQuantity = async (product, quantity) => {
    try {
      const response = await api.put(`cart?cartItemId=${product.id}&quantity=${quantity}`, {
        quantity
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setCartList((prevCartList) => prevCartList.map(item => 
        item.id === product.id ? { ...item, quantity: response.data.quantity, totalPrice: response.data.totalPrice } : item
      ));
    } catch (err) {
      console.error('Error changing quantity:', err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container style={{ height: "100%", marginBottom: "50px" }}>
          <Row style={{ position: "relative" }}>
            {!(cartList.length > 0) ? (
              <div className="empty-cart bebas-neue-regular">
                <h1>YOUR CART IS EMPTY</h1>
                <button onClick={() => navigate("/")}>GO SHOPPING NOW</button>
              </div>
            ) : (
              <>
                <Row>
                  <Col>
                    <Row className='cart-data-field-container'>
                      <Col md={6} className='cart-data-field cart-data-product'>Product</Col>
                      <Col className='cart-data-field'>Unit Price</Col>
                      <Col className='cart-data-field'>Quantity</Col>
                      <Col className='cart-data-field'>Total Price</Col>
                      <Col className='cart-data-field'>Actions</Col>
                    </Row>
                    {cartList.map(product => (
                      <Row key={product.id} className='cart-data-data-container'>
                        <Col md={6} className='cart-data-data cart-data-product'>
                          <Row>
                            <Col>
                              <img onClick={() => navigate(`/product/${product.productId}`)} src={product.imageUrl.original} alt="" style={{ width: "100px" }} />
                            </Col>
                            <Col md={9} style={{ display: 'flex', alignItems: 'center' }}>
                              <div className="cart-product-name">{product.productName}</div>
                            </Col>
                          </Row>
                        </Col>
                        <Col className='cart-data-data'>${product.discountPrice}</Col>
                        <Col className='cart-data-data'>
                          <div style={{ display: "flex", justifyContent: "center" }}>
                            <select className="qty-select-bar" value={product.quantity} onChange={(e) => handleChangeQuantity(product, e.target.value)}>
                              {[...Array(product.currentStock || 10).keys()].map((_, index) => (
                                <option key={index + 1} value={index + 1}>{index + 1}</option>
                              ))}
                            </select>
                          </div>
                        </Col>
                        <Col className='cart-data-data'>${product.totalPrice}</Col>
                        <Col className='cart-data-data'>
                          <button className="remove-btn" onClick={() => handleRemove(product.id)}>Remove</button>
                        </Col>
                      </Row>
                    ))}
                  </Col>
                </Row>
                <Row className='checkout-box'>
                  <Row>
                    <div style={{ display: "flex", marginTop: "3rem" }}>
                      <button className="clear-cart-btn bebas-neue-regular" onClick={handleClearCart}>
                        <FaTrash />
                        CLEAR CART
                      </button>
                      <div className="cart-subtotal">Total ({cartList.length}) items: <strong style={{ color: "#9C1010" }}>${total}</strong></div>
                    </div>
                  </Row>
                  <Row>
                    <div className='place-order-btn bebas-neue-regular'>
                      <button onClick={() => navigate('/checkout')}>Check Out</button>
                    </div>
                  </Row>
                </Row>
              </>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

export default CartPage;
