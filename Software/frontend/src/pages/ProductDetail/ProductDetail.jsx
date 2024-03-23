import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../context/AppContext';
import './ProductDetail.css'
import Loader from '../../components/Loader/Loader';
import axios from 'axios';
import { data } from '../../data/data'
const ProductPage = () => {
  const { id } = useParams();
  console.log(id);
  const { product, setProduct, isLoading, setIsLoading } = useContext(GlobalContext);
  // useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         console.log(id);
  //           setIsLoading(true);
  //           const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
  //           .then(res => {
  //               setIsLoading(false);
  //               setProduct(res.data);
  //           });
  //       } catch (e) {
  //           setIsLoading(false); // Stop loading in case of error
  //           console.error(e);
  //       }
  //   }
  //   fetchData();
  // }, [])
  useEffect(() => {
    setProduct(data.find(productId => productId.id === id))
    console.log(product);
  }, [])
  return (
    // <> {isLoading ? <Loader/> :
    //   <div className='product-detail'>
    //     <div className="img-container"> <img src={product.image} alt="" /></div>
    //     <span><strong>Title:</strong> {product.title}</span>
    //     <span><strong>Price:</strong> {product.price}</span>
    //     <p><strong>Description:</strong> {product.description}</p>
    //     <span><strong>Category:</strong> {product.category}</span>
      // </div>}
    // </>
    <>{product?.image?.original === undefined ? <Loader/> : (<div className='product-detail'>
    <div className="img-container"> <img src={product?.image?.original} alt="" /> {console.log(product.image.original)}</div>
    <span><strong>Title:</strong> {product.name}</span> 
    <span><strong>Price:</strong> {product.retailPrice}</span>
    <span><strong>Story:</strong> {product.story || 'No story yet! but a great shoe tho '}</span>
    <span><strong>Brand:</strong> {product.brand}</span>
    <span><strong>Release year:</strong> {product.releaseYear}</span>
    <span><strong>Release date:</strong> {product.releaseDate}</span>
    <span><strong>Colorway:</strong> {product.colorway}</span>
    <span><strong>Gender:</strong> {product.gender}</span>
  </div>)}</>
    
    
  )
}

export default ProductPage