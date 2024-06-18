import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './ProfileDetail.css'
import { useState, useEffect } from 'react';
import api from '../../../api/axiosConfig'
import Loader from '../../../components/Loader/Loader';
export default function ProfileDetail() {
  const [userInfo, setUserInfo] = useState();
  const [loading, setLoading] = useState(true);
  async function fetchUserInfo() {
    try {
        const response = await api.get('/user/information', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setUserInfo(response.data);
        console.log(response);
        setLoading(false); // Directly set loading to false after fetching
    } catch (err) {
        console.error('Error:', err);
    }
}

  




  useEffect(() =>{
    fetchUserInfo();
  },[])
  return  <>
    {loading ? (
      <Loader />
  ) : (
    <div className="profile-container">
      <h3 className='profile-title'>Personal Information</h3>
      
      <div className='profile-descript'>
        <h4 md={3}>Full Name:</h4>
        <span>{userInfo.firstName + " " + userInfo.lastName}</span>
      </div>
      <div className='profile-descript'>
        <h4 md={3}>Email:</h4>
        <span>{userInfo.email}</span>
      </div>
      <div className='profile-descript'>
        <h4 md={3}>Phone Number:</h4>
        <span>{userInfo.mobile}</span>
      </div>
      <div className='profile-descript'>
        <h4 md={3}>Gender:</h4>
        <span>{userInfo.gender}</span>
      </div>
    </div>
  )}
  </>
}
