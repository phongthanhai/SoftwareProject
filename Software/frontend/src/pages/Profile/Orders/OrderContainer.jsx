import React from 'react'
import OrderItem from './OrderItem';
import'./OrderContainer.css';
import { useState, useEffect } from 'react';
import api from '../../../api/axiosConfig'
import Loader from '../../../components/Loader/Loader';

export default function OrderContainer(order){

    const [items, setItems] = useState([]);
    const [address, setAddress] = useState([]);
    const [loading, setLoading] = useState(true);
    
    async function fetchItemsInOrder(){
      
        try{
          const response = await api.get(`/order/${order.order.orderId}`, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
    
          });
          
          //console.log(response.data.items);
          setItems(response.data.items);
          setAddress(response.data.address);
          //console.log(items);
          setLoading(false);
        }
        catch(err){
    
        }
      }

    useEffect(() =>{
        fetchItemsInOrder();
    },[])

    function setOrderStatus(status){
      // PENDING
      if (status == 1){
        return "ACCEPTED"
      }
      else if (status == 2){
        return "DELIVERY"
      }
      else if (status == 3){
        return "TERMINATED"
      }
      else if (status == 0){
        return "REJECTED"
      }
    }

    //process order date part
    const datetimeString = order.order.createAt;
    const datePart = datetimeString.split('T')[0];
    
    return <>
    {loading? (<Loader />)
    :(
    <div>
      <h3>Order in {datePart} - {setOrderStatus(order.order.status)}</h3>
      <div className="item-container">
        {items.map((item) =>(
            <OrderItem product={item} address={address}/>
        ))}
      </div>
      
      
    </div>
  )}
  </>
}