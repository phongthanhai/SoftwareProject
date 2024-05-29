import React from 'react'
import { Row, Col } from 'react-bootstrap';
import './AddressSelect.css'
const AddressSelect = ({ address, selectedAddress, handleSelectAddress }) => {
    return (
        <Row key={address.id} className='address-row-bar'>
            <Col>{address.name}</Col>
            <Col>{address.addressDetails}, {address.ward}, {address.district}, {address.province}, {address.phone} </Col>
            <Col>
                <div style={{ display: "flex", justifyContent: "right" }}>
                    {selectedAddress === address.id ? (
                        <button className="selected-address-button bebas-neue-regular" disabled> <span className='v-tick'>✓</span> SELECTED</button>
                    ) : (
                        <button className='select-address-btn bebas-neue-regular' onClick={() => handleSelectAddress(address.id)}>SELECT</button>
                    )}
                </div>
            </Col>
        </Row>
    );
}

export default AddressSelect