import * as React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css'
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { GlobalContext } from '../../context/AppContext';
import { SiNike } from "react-icons/si";
import { HiBars3 } from "react-icons/hi2";

import SearchBar from './SearchBar/SearchBar';
export default function Header() {
  const { cartList, setSideBarOn, isLogIn, setIsLogIn } = useContext(GlobalContext)
  const navigate = useNavigate();
  function setSideBar() {
    console.log("hi");
    setSideBarOn(true);
    console.log("hi");
  }
  return (
    <nav className='nav-wrapper'>
      <Container className='nav-container'>
        <div className="left-nav">
          <HiBars3 onClick={setSideBar} style={{ cursor: "pointer" }} />

          <Link to='/' className='teko'><SiNike /></Link>
          {/* <Link to="/products" className='teko'>PRODUCTS</Link> */}
        </div>
        <SearchBar />

        <div className="right-nav">
          <div className="cart-icon">
            {isLogIn === true ?  <span>{cartList.length}</span> : null}
           
            <FaShoppingCart onClick={() => navigate('/cart')} />
          </div>
          {isLogIn === true ?
          // show profile
            <div className="profile">
              <IoPerson />
              <div className="profile-dropdown">
                <Link to='/member/details'>Profile</Link>
                <Link to='/member/purchase'>Purchase</Link>
                <Link to='/member/orders'>Orders</Link>
                <Link to='/' onClick={() => setIsLogIn(false)}>Log out</Link>
              </div>
            </div> :
            // show log in sign up button
            <div className='sign-in-up'>
              <Link className='sign-in-link' to='/sign-in'>Log in</Link>
              <Link className='sign-up-link' to='/sign-up'>Sign up</Link>
            </div>}


        </div>
      </Container>
    </nav>


  );
}