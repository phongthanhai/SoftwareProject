import React, { useContext } from 'react'
import './ProductCard.css'
import { Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/AppContext'
import { FaStar, FaRegStar } from 'react-icons/fa';
const ProductCard = ({ product }) => {
    const { cartList, setCartList } = useContext(GlobalContext);
    const navigate = useNavigate();
    function viewDetail() {
        navigate(`/product/${product.id}`);
    }
    function addToCart() {
        let cpyCartList = [...cartList];
        const index = cpyCartList.findIndex(item => item.id === product.id)
        console.log(cpyCartList, 'cpycartlist');
        console.log(cartList, 'cartList');

        if (index === -1) {
            cpyCartList.push(product)
        } else {
            cpyCartList = cpyCartList.filter(item => item.id !== product.id)
            console.log(product.id, 'here');
        }
        setCartList(cpyCartList);
        // setCartList(cartList.filter(p => p.id !== product.id))
    }
    return (
        <Col className='productList' md={2} >
            <div key={product.id} className='productCard'>
                <div  onClick={viewDetail} style={{flex: 1}}>
                    <img src={product.image.original} alt='product-img' className='productImage'></img>

                    <div className='productCard__content'>
                        <h3 className='productName'>{product.name}</h3>
                        <div className='displayStack__1'>
                            <div className='productPrice'>${product.retailPrice}</div>
                            <div className='productSales'>{product.estimatedMarketValue} units sold</div>
                        </div>
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
                </div>
                <button className='cart-btn' onClick={addToCart}>
                    {cartList && cartList.length > 0 && cartList.findIndex(
                        (item) => item.id === product.id) !== -1
                        ? 'REMOVE'
                        : "ADD TO CART"}</button>
            </div>

        </Col>
    )
}

export default ProductCard