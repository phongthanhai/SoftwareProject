import React, { useContext, useEffect, useState } from 'react';
import "./Sidebar.scss";
import { Link } from 'react-router-dom';
import { CiCircleRemove } from "react-icons/ci";

import { GlobalContext } from '../../context/AppContext';
const Sidebar = () => {

  const { sideBarOn, setSideBarOn } = useContext(GlobalContext);
  const genders = ['men', 'women', 'toddler', 'child', 'preschool', 'infant', 'youth'];
  const brands = ['Nike', 'adidas', 'Jordan', 'ASICS', 'Reebok', 'Converse', 'Puma', 'MSCHF', 'Crocs', 'New Balance'];
  return (
    <aside className={`sidebar ${sideBarOn ? 'hide-sidebar' : ""}`}>
      {/* <button type="button" className='sidebar-hide-btn' onClick={() => setSideBarOn(false)}>
        <CiCircleRemove />
      </button> */}
      <div className='sidebar-cnt'>
        <div className='cat-title bebas-neue-regular'>Brands <CiCircleRemove className='sidebar-hide-btn' onClick={() => setSideBarOn(false)}/></div>
        <ul className='cat-list'>
          {
            brands.map((category, idx) => {
              return (
                <li key={idx} onClick={() => setSideBarOn(false)}>
                  <Link to={`category/brand/${category}`} className='cat-list-link assistant'>{category.replace("-", " ")}</Link>
                </li>
              )
            })
          }
        </ul>
        <div className='cat-title bebas-neue-regular'>Genders</div>
        <ul className='cat-list'>
          {
            genders.map((category, idx) => {
              return (
                <li key={idx} onClick={() => setSideBarOn(false)}>
                  <Link to={`category/gender/${category}`} className='cat-list-link assistant'>{category.replace("-", " ")}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar