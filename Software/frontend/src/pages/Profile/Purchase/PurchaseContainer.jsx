import React from 'react'
import PurchasedItem from './PurchasedItem';
import { useState, useEffect } from 'react';
import api from '../../../api/axiosConfig'
import Loader from '../../../components/Loader/Loader';

export default function OrderContainer(order){

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true);
    async function fetchItemsInOrder(){
        
        try{
            if (order.order.status == 3){
                const response = await api.get(`/order/${order.order.orderId}`, {
                    headers: {
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
            
                  });
                  setItems(response.data.items);
            }
          
          
          //console.log(response.data.items);
          
          //console.log(items);
          setLoading(false);
        }
        catch(err){
    
        }
      }

    useEffect(() =>{
        fetchItemsInOrder();
    },[])

    //process order date part
    
    return <>
    {loading? (<Loader />)
    :(
    <div>
      <div>
        {items.map((item) =>(
            <PurchasedItem product={item}/>
        ))}
      </div>  
    </div>
  )}
  </>
}