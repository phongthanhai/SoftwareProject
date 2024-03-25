import * as React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css'
import { IoPerson } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { GlobalContext } from '../../context/AppContext';
import { SiNike } from "react-icons/si";
export default function Header() {
  const {cartList} = useContext(GlobalContext)
  const navigate = useNavigate();
  return (
    <nav className='nav-wrapper'>
      <Container className='nav-container'>
        <div className="left-nav">
          <Link to='/' className='teko'><SiNike /></Link>
          <Link to="/products" className='teko'>PRODUCTS</Link>
          <Link to='/about-us' className='teko'>ABOUT US</Link>
          <Link className='teko'>CONTACT</Link>
        </div>
        {/* <div className="search-form">
          <form className='search-bar' onSubmit={handleSubmit} >
            <input
              type="text"
              placeholder="Search"
              name="search"
              value={searchParams}
              onChange={(event) => setSearchParams(event.target.value)}
              className=""
              aria-label="Search" />
            <button type='submit' ><FaSearch /></button>
          </form>
        </div> */}

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
              <Link to='/'>Logout</Link>
            </div>
          </div>
        </div>
      </Container>
    </nav>


  );
}