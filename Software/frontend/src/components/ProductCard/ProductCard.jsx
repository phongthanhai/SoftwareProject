import React, { useContext } from 'react'
import './ProductCard.css'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/AppContext'
const ProductCard = ({ product }) => {
    const { cartList, setCartList, addToCart } = useContext(GlobalContext);
    const navigate = useNavigate();
    function viewDetail() {
        navigate(`/product/${product.id}`);
    }
    
    return (
        <Col className='productList' md={2} >
            <div key={product.id} className='productCard'>
                <div  onClick={viewDetail} style={{flex: 1, display:'flex', flexDirection:'column'}}>
                    <img src={product.image.original} alt='product-img' className='productImage'></img>

                    <div className='productCard__content'>
                        <h3 className='productName'>{product.name}</h3>
                        
                        {/* <div className='displayStack__2'>
                            <div className='productRating'>
                                {
                                    [...Array(Math.round(product.rating.rate))].map((index) => (
                                        <FaStar id={index + 1} key={index} />
                                    ))
                                }
                                {
                                    [...Array(5 - Math.round(product.rating.rate))].map((index) => (
                                        <FaRegStar id={index + 1} key={index} />
                                    ))
                                }
                            </div>
                        </div> */}
                    </div>
                    <div className='displayStack__1'>
                            <div className='productPrice'><del>${product.retailPrice}</del></div>
                            <div className='productSales'>${product.discountPrice}</div>
                        </div>
                </div>
                
            </div>

        </Col>
    )
}

export default ProductCard