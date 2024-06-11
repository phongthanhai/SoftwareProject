import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/AppContext';
import './ProductDetail.css';
import Loader from '../../components/Loader/Loader';
import { BsCartPlus } from "react-icons/bs";
import { Container, Row, Col } from 'react-bootstrap';
import api from '../../api/axiosConfig';
import Slider from '../../components/Slider/Slider';
import Review from './Review/Review';
import StarRating from '../../components/StarRating/StarRating';
const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();
  const { addToCart} = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);
  const getShoeData = async () => {
    try {
      const response = await api.get(`/product/${id}`);
      setProduct(response.data);
      setRelatedProducts(response.data.relatedProducts);
      setTimeout(() => {
        setLoading(false);
      }, 1000); // Loader for 1 second
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getShoeData();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {/* {addedToCart && <CartItemAddedMessage />}
          {alreadyInCart && <CartItemExistMessage />} */}
          <Row className='product-detail-row'>
            <Col md={6}>
              <div className="img-detail-container">
                <img src={product?.product?.image?.original} alt="" />
              </div>
            </Col>
            <Col md={6} className='product-detail-content'>
              <Row className='product-detail-row'>
                <Row className="product-name bebas-neue-regular">
                  <h1>{product.product?.name}</h1>
                </Row>
                <Row className="product-price">
                  <span className='retail-price'>${product.product?.retailPrice}</span>
                  <span className='discount-price'>${product.product?.discountPrice}</span>
                </Row>
              </Row>
              <Row className='product-detail-row'>
                <Row className='product-detail-row'>
                  <Col className='pDetail-field' md={2}><span>Story:</span></Col>
                  <Col className='pDetail-data'>{product.product?.story || 'No story yet! but a great shoe tho '}</Col>
                </Row>
                <Row className='product-detail-row'>
                  <Col className='pDetail-field' md={2}><span>Brand:</span></Col>
                  <Col className='pDetail-data'>{product.product?.brand}</Col>
                </Row>
                <Row className='product-detail-row'>
                  <Col className='pDetail-field' md={2}><span>Release year:</span></Col>
                  <Col className='pDetail-data'>{product.product?.releaseYear}</Col>
                </Row>
                <Row className='product-detail-row'>
                  <Col className='pDetail-field' md={2}><span>Release date:</span></Col>
                  <Col className='pDetail-data'>{product.product?.releaseDate}</Col>
                </Row>
                <Row className='product-detail-row'>
                  <Col className='pDetail-field' md={2}><span>Colorway:</span></Col>
                  <Col className='pDetail-data'>{product.product?.colorway}</Col>
                </Row>
                <Row className='product-detail-row'>
                  <Col className='pDetail-field' md={2}><span>Gender:</span></Col>
                  <Col className='pDetail-data'>{product.product?.gender}</Col>
                </Row>
                <Row className='product-detail-row'>
                  <button className='cart-btn bebas-neue-regular' onClick={() => addToCart(product.product)}>
                    <BsCartPlus />
                    ADD TO CART
                  </button>
                </Row>
              </Row>
            </Col>
          </Row>
          <Row className='product-detail-row'>
            <Container>
              <Row className='product-detail-row'>
                <h1 className='hp-title bebas-neue-regular'>Product Ratings</h1>
              </Row>
              <Row style={{ fontSize: "3rem", margin: "2rem 0" }}>
                <div>
                  <span> <StarRating rating={3.6} /></span>
                </div>
              </Row>
            </Container>
          </Row>
          <Row className='product-detail-row'>
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
          <Row className='product-detail-row'>
            <Container>
              <Row className='product-detail-row'>
                <h1 className='hp-title bebas-neue-regular'>RELATED PRODUCTS</h1>
              </Row>
              <Row className='product-detail-row'>
                <Slider relatedProducts={relatedProducts} />
              </Row>
            </Container>
          </Row>
        </Container>
      )}
    </>
  );
};

export default ProductPage;
