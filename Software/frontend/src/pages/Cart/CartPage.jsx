import React, { useContext } from 'react'
import { GlobalContext } from '../../context/AppContext';
import { Container, Row, Col } from 'react-bootstrap';
import './CartPage.css'
import { useNavigate } from 'react-router-dom';
import { FiMinus } from 'react-icons/fi';
import { IoAdd } from 'react-icons/io5';
const CartPage = () => {
  const { cartList, setCartList } = useContext(GlobalContext);
  const navigate = useNavigate();

  const totalCost = cartList.reduce((price, item) => {
    return price + (item.discountPrice * item.qty);
  }, 0);

  function findIndexAt(product) {
    let ind = -1;
    cartList.forEach((data, index) => {
      if (data.id === product.id)
        ind = index;
    });
    return ind;
  }
  function handleDecrease(product) {
    let ind = findIndexAt(product);
    const tempArr = cartList;
    if (tempArr[ind].qty - 1 > 0)
      tempArr[ind].qty -= 1;

    setCartList([...tempArr])
  }


  function handleIncrease(product) {
    const maxStock = 10;
    let ind = findIndexAt(product);
    const tempArr = cartList;
    if (tempArr[ind].qty + 1 <= maxStock)
      tempArr[ind].qty += 1;

    setCartList([...tempArr])
  }

  function handleRemove(id) {
    const newCart = cartList.filter((item) => item.id !== id);
    setCartList(newCart);
  }
  return (
    <Container>
      <Row>{!(cartList.length > 0) ? 'CART IS EMPTY' : (
        <Row>
          <Col>
            <Row className='cart-data-field-container'>
              <Col md={6} className='cart-data-field cart-data-product'>Product</Col>
              <Col className='cart-data-field'>Unit Price</Col>
              <Col className='cart-data-field'>Quantity</Col>
              <Col className='cart-data-field'>Total Price</Col>
              <Col className='cart-data-field'>Actions</Col>
            </Row>
            {cartList.map(product => {
              return (
                <Row className='cart-data-data-container'>
                  <Col md={6} className='cart-data-data cart-data-product'>
                    <Row>
                      <Col>
                        <img onClick={() => navigate(`/product/${product.id}`)} src={product.image.original} alt="" style={{ width: "100px" }} />
                      </Col>
                      <Col md={9} style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="cart-product-name">{product.name}</div>
                      </Col>
                    </Row>
                  </Col>
                  <Col className='cart-data-data'>${product.discountPrice}</Col>
                  <Col className='cart-data-data'>
                    <div className='qty-input-bar'>
                      <button className='qty-btn' onClick={() => handleDecrease(product)}>
                        <FiMinus />
                      </button>
                      <input
                        type="text"
                        value={product.qty}
                        role="spinbutton"
                        aria-live="assertive"
                        aria-valuenow={product.qty}
                      />
                      <button className='qty-btn' onClick={() => handleIncrease(product)}>
                        <IoAdd />
                      </button>
                    </div>
                  </Col>
                  <Col className='cart-data-data'>${product.qty * product.discountPrice}</Col>
                  <Col className='cart-data-data'>
                    <button className="remove-btn" onClick={() => handleRemove(product.id)}>Remove</button>
                  </Col>
                </Row>
              );
            })
            }
          </Col>
          <Col md={2}>
            <div className="cart-subtotal">SUBTOTAL: ${totalCost}</div>
          </Col>
        </Row>
      )}
      </Row>

    </Container>
  )
}

export default CartPage