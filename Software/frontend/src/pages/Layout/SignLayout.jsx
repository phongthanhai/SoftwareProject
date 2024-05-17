import { Outlet } from 'react-router-dom'
import React from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

const SignLayout = () => {
    
    return (
        <>
                <Header />
                <Sidebar/>
            <div style={{flex:"1"}}>
                <Outlet />
            </div>   
        </>
    )
}

export default SignLayout