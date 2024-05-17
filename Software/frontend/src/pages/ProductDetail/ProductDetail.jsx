import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/AppContext';
import './ProductDetail.css'
import Loader from '../../components/Loader/Loader';
import { BsCartPlus } from "react-icons/bs";
import { Container, Row, Col } from 'react-bootstrap'
import api from '../../api/axiosConfig'
import Slider from '../../components/Slider/Slider';
import { CartItemAddedMessage, CartItemExistMessage } from './CartMessage/CartMessage';
import Review from './Review/Review';
import StarRating from './StarRating/StarRating';
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
              <Row>
                <div style={{ display: 'flex', justifyContent: 'left', marginTop: '3rem' }}>
                  <button className='cart-btn' onClick={() => addToCart(product.product)}>
                    <BsCartPlus />
                    ADD TO CART
                  </button>
                </div>
              </Row>
            </Row>


          </Col>
        </Row>
        <Row style={{ fontSize: "3rem", margin: "2rem 0" }}>
          <Row>
            <div>
              <span>Product Ratings:</span>
              <span> <StarRating rating={3.1} /></span>
            </div>
          </Row>
        </Row>
        <Row>
          {/* <Row style={{ fontSize: "3rem", margin: "1rem 0" }}>Reviews</Row> */}
          <Container>
            <Review
              username="Van Tuan"
              rating={5}
              date="2023-10-13 02:02"
              title="NICE"
              deliveryFeedback="Nice shoe, really fit"
            />
            <Review
              username="Hai Phong"
              rating={1}
              date="2023-10-13 02:02"
              title="NICE"
              deliveryFeedback="The shoe is not like the description. i dislike it"
            />
            <Review
              username="Van Hieu"
              rating={3}
              date="2023-10-13 02:02"
              title="NICE"
              deliveryFeedback="The shoe is good but delivery was hello slow"
            />
          </Container>

        </Row>
        <Row>
          <Container>
            <Row>
              <h1 className='hp-title bebas-neue-regular'>RELATED PRODUCTS</h1>
            </Row>
            <Row>
              <Slider relatedProducts={relatedProducts} />
            </Row>
          </Container>

        </Row>
      </Container>
    )}
    </>


  )
}

export default ProductPage