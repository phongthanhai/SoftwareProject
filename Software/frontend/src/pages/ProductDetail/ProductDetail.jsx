import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/AppContext';
import './ProductDetail.css'
import Loader from '../../components/Loader/Loader';
import { BsCartPlus } from "react-icons/bs";
import { Container, Row, Col } from 'react-bootstrap'
import api from '../../api/axiosConfig'
import Slider from '../../components/Slider/Slider';
import { data } from '../../data/data'
import { CartItemAddedMessage, CartItemExistMessage } from './CartMessage/CartMessage';
const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState({});
  const { id } = useParams();
  const { addToCart, addedToCart, alreadyInCart } = useContext(GlobalContext);
  const getShoeData = async () => {
    try {
      const response = await api.get(`/product/${id}`);
      setProduct(response.data);
      setRelatedProducts(response.data.relatedProducts)
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getShoeData();
    console.log(product);
    // setProducts(data);
  }, [id])

  return (
    <>{product?.product?.image?.original === undefined ? <Loader /> : (
      <Container>
        {addedToCart ? <CartItemAddedMessage /> : null}
        {alreadyInCart ? <CartItemExistMessage /> : null}
        <Row>
          <Col md={6}>
            <div className="img-detail-container"> <img src={product?.product?.image?.original} alt="" /></div>
          </Col>
          <Col md={6} className='product-detail-content'>
            <div className="product-name"><h1>{product.product?.name}</h1></div>
            <div className="product-price">
              <del>${product.product?.retailPrice}</del>
              <h1>${product.product?.discountPrice}</h1>
            </div>
            <Row>
              <Row>
                <Col className='pDetail-field' md={2}><span>Story:</span></Col>
                <Col className='pDetail-data'>{product.product?.story || 'No story yet! but a great shoe tho '}</Col>
              </Row>
              <Row>
                <Col className='pDetail-field' md={2}><span>Brand:</span></Col>
                <Col className='pDetail-data'>{product.product?.brand}</Col>
              </Row>
              <Row>
                <Col className='pDetail-field' md={2}><span>Release year:</span></Col>
                <Col className='pDetail-data'>{product.product?.releaseYear}</Col>
              </Row>
              <Row>
                <Col className='pDetail-field' md={2}><span>Release date:</span></Col>
                <Col className='pDetail-data'>{product.product?.releaseDate}</Col>
              </Row>
              <Row>
                <Col className='pDetail-field' md={2}><span>Colorway:</span></Col>
                <Col className='pDetail-data'>{product.product?.colorway}</Col>
              </Row>
              <Row>
                <Col className='pDetail-field' md={2}><span>Gender:</span></Col>
                <Col className='pDetail-data'>{product.product?.gender}</Col>
              </Row>
            </Row>
            <div style={{ display: 'flex', justifyContent: 'left', marginTop: '3rem' }}>
              <button className='cart-btn' onClick={() => addToCart(product.product)}>
                <BsCartPlus />
                ADD TO CART
              </button>
            </div>

          </Col>
        </Row>
        <Row>
          <Row>
            <h1 className='hp-title bebas-neue-regular'>RELATED PRODUCTS</h1>
          </Row>
          <Row>
            <Slider relatedProducts={relatedProducts}/>
          </Row>
        </Row>
      </Container>
    )}
    </>


  )
}

export default ProductPage