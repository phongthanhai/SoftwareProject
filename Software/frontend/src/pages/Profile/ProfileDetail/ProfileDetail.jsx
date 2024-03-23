import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './ProfileDetail.css'
export default function ProfileDetail() {
  return (
    <Container>
      <Row className='profile-title'><h3>Profile</h3></Row>
      <Row>
        <Col md={7}>
          <Row className='profile-descript'>
            <Col md={3}>Username</Col>
            <Col>Envytee</Col>
          </Row>
          <Row className='profile-descript'>
            <Col md={3}>Name</Col>
            <Col>Thuan Nguyen</Col>
          </Row>
          <Row className='profile-descript'>
            <Col md={3}>Email</Col>
            <Col>thuannguyenviet.work@gmail.com</Col>
          </Row>
          <Row className='profile-descript'>
            <Col md={3}>Phone number</Col>
            <Col>0344444128</Col>
          </Row>
          <Row className='profile-descript'>
            <Col md={3}>Gender</Col>
            <Col>Male</Col>
          </Row>
          <Row className='profile-descript'>
            <Col md={3}>Date of birth</Col>
            <Col>04/09/2003</Col>
          </Row>
        </Col>
        <Col md ={5} className='profile-img-container'>
            <div className="profile-img">
              <img src="/square-profile.jpg" alt="" />
            </div>

        </Col>

      </Row>

    </Container>
  )
}
