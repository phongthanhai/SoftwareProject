import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Layout.css'
import AppContext from '../../context/AppContext'
import Sidebar from '../../components/Sidebar/Sidebar'
const Layout = () => {
  return (
    <AppContext>
      <div className="layout-container">
        <Header />
        <Sidebar/>
        <div className="main-content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </AppContext>
  )
}

export default Layout