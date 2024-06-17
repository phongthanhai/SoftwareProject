import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../../api/axiosConfig'
import Loader from '../../../components/Loader/Loader';
import PurchaseContainer from './PurchaseContainer'

function Purchase() {
  const [loading, setLoading] = useState(true);
  //fecth order of user
  const [orders, setOrders] = useState([]);
  async function fetchAllOrders() {
    try{
      const response = await api.get('/order', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

      });
      
      //console.log(response.data[0].status);
      setOrders(response.data);
      setLoading(false);
      
    }
    catch(err){

    }
  }

  useEffect(() => {   
    fetchAllOrders();
  },[])
  
  return <>
    {loading? (<Loader />)
    :(
      <div className="order-container">
      
      {orders.map((order) =>(
        <PurchaseContainer order={order} />
      ))}
      
    </div>
  )}
  </>
}

export default Purchase
