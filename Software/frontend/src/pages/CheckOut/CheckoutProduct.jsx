import React from 'react'
import { Col } from 'react-bootstrap'

const CheckoutProduct = ({ imageSrc, quantity }) => {
    return (
        <Col md="4">
            <div>
                <img src={imageSrc} alt="" style={{ width: "100px" }} />
                <span style={{display:"flex", justifyContent:"right", fontSize:"14px"}}>
                    x{quantity}

                </span>
            </div>
        </Col>
    )
}

export default CheckoutProduct