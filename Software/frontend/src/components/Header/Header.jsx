import * as React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css'
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { GlobalContext } from '../../context/AppContext';
import { SiNike } from "react-icons/si";
import SearchBar from './SearchBar/SearchBar';
export default function Header() {
  const {cartList} = useContext(GlobalContext)
  const navigate = useNavigate();

  return (
    <nav className='nav-wrapper'>
      <Container className='nav-container'>
        <div className="left-nav">
          <Link to='/' className='teko'><SiNike /></Link>
          {/* <Link to="/products" className='teko'>PRODUCTS</Link> */}
        </div>
        <SearchBar />

        <div className="right-nav">
          <div className="cart-icon">
            <span>{cartList.length}</span>
            <FaShoppingCart onClick={() => navigate('/cart')}/>
          </div>
          <div className="profile">
            <IoPerson />
            <div className="profile-dropdown">
              <Link to='/member/details'>Profile</Link>
              <Link to='/member/purchase'>Purchase</Link>
              <Link to='/member/orders'>Orders</Link>
              <Link to='/sign-in'>Sign In</Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>


  );
}