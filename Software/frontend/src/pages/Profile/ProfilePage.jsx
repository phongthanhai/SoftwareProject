import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import './Profile.css'
export default function ProfilePage() {
  return (
    <div className="profile-container">
        <Container>
            <Row className='title-wrapper'>  <h1 className='title'>MEMBERSHIP</h1>  </Row>
            <Row>
                <Col md={3}>
                    <Row>
                        <h3>Membership</h3>
                        <ul className="profile">
                            <li className="profile-link"><Link to='/member/details'>Profile</Link></li>
                            <li className="profile-link"><Link to='/member/notifications'>Notification</Link></li>
                            <li className="profile-link"><Link to='/member/purchase'>Purchase history</Link></li>
                            <li className="profile-link"><Link to='/member/orders'>Order history</Link></li>
                        </ul>
                    </Row>
                    <Row>
                        <h3>Profile settings</h3>
                        <ul className="profile">
                            <li className="profile-link"><Link to='/member/edit'>Edit profile</Link></li>
                            <li className="profile-link"><Link to='/member/password-edit'>Change my password</Link></li>
                        </ul>
                    </Row>
                </Col>
                <Col md={9}>
                    <div className="profile-content">
                        <Outlet/>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
