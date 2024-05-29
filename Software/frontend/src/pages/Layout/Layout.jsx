import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Layout.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import { GlobalContext } from '../../context/AppContext'
const Layout = () => {

  return (
    <div className="layout-container">
      <Header />
      <Sidebar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout