import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import './Footer.css'
export default function Footer() {
  return (
    <footer className='footer-container'>
        <Container >
            {/* Social connectivity */}
            <Row className='social-row'>
                <Col  className='social-col'>
                    <h3>Connect with us</h3>
                    <FaFacebookSquare  className='social-item'/>
                    <FaInstagram  className='social-item'/>
                    <FaYoutube  className='social-item'/>
                    <FaSquareXTwitter className='social-item' />
                    <FaTiktok  className='social-item'/>
                </Col>
            </Row>
            {/* More about us */}
            <Row>
                <Col className='footer-col'>
                    <h3 className='footer-col-title'>Popular brand</h3>
                    <ul className="col-list">
                        <li className="col-item">ADIDAS</li>
                        <li className="col-item">NIKE</li>
                        <li className="col-item">PUMA</li>
                        <li className="col-item">JORDAN</li>
                        <li className="col-item">CONVERSE</li>
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <h3 className='footer-col-title'>FAMOUSLY YOU</h3>
                    <ul className="col-list">
                        <li className="col-item">Sign In / Join Now</li>
                        <li className="col-item">Learn More</li>
                        <li className="col-item">Credit Card</li>
                        <li className="col-item">Rewards Terms</li>
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <h3 className='footer-col-title'>Help</h3>
                    <ul className="col-list">
                        <li className="col-item">Shipping & Returns</li>
                        <li className="col-item">Learn More</li>
                        <li className="col-item">Track My Order</li>
                        <li className="col-item">Gift Cards</li>
                    </ul>
                </Col>
                <Col className='footer-col'>
                    <h3 className='footer-col-title'>About us</h3>
                    <ul className="col-list">
                        <li className="col-item">About Us</li>
                        <li className="col-item">Careers</li>
                        <li className="col-item">Ticket to Dream</li>
                        <li className="col-item">Eco-Conscious</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
