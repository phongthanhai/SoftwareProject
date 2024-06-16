import React from 'react'
import OrderItem from './OrderItem';
import { useState, useEffect } from 'react';
import api from '../../../api/axiosConfig'
import Loader from '../../../components/Loader/Loader';
export default function Orders() {

  const {orders, setOrders} = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchOrder = () =>{
    try{
      const response = api.get('/order', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

      });
      console.log(response);
      setOrders(response.data);
      setLoading(false);
      
    }
    catch(err){

    }
  }

  useEffect(() => {
    fetchOrder();
  },[])
  return <>
    {loading? (<Loader />)
    :(
    <div className="order-container">
      
      {/* {orders.map((order) =>(
        <OrderItem product={order} />
      ))} */}
      
    </div>
  )}
  </>
}
