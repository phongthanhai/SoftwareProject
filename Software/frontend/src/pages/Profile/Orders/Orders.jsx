import React from 'react'
import OrderContainer from './OrderContainer';
import { useState, useEffect } from 'react';
import api from '../../../api/axiosConfig'
import Loader from '../../../components/Loader/Loader';


export default function Orders() {

  //store array of orders
  const [orders, setOrders] = useState([]);
  
  const [loading, setLoading] = useState(true);
  async function fetchOrders() {
    try{
      const response = await api.get('/order', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

      });
      
      //console.log(response.data);
      setOrders(response.data);
      setLoading(false);
      
    }
    catch(err){

    }
  }

  useEffect(() => {
    fetchOrders();
  },[])

  return <>
    {loading? (<Loader />)
    :(
    <div className="order-container">
      
      {orders.map((order) =>(
        <OrderContainer order={order} />
      ))}
      
    </div>
  )}
  </>
}
