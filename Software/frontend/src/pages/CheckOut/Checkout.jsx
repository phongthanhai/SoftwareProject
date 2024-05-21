import React, { useContext, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Checkout.css';
import { GlobalContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import LocationSelect from '../../components/LocationSelect/LocationSelect';
import AddressSelect from './AddressSelect/AddressSelect';
// import AddressSelect from './AddressSelect/AddressSelect';

function Checkout() {
    const addresses = [
        {
            id: 1,
            name: 'Thuận Nguyễn Viết',
            type: '(Membership address)',
            addressDetails: '458 Minh Khai, Hai Bà Trưng, Hà Nội',
            province: 'Lạng Sơn',
            district: 'Huyện Văn Lãng',
            ward: 'Xã Hoàng Việt',
            phone: '0344444128',
        },
        {
            id: 2,
            name: 'Thuận Nguyễn Viết',
            addressDetails: '458 Minh Khai, Hai Bà Trưng, Hà Nội',
            province: 'Ha Noi',
            district: 'Ha Ba Trung',
            ward: 'Minh Khai',
            phone: '0344444128',
        },
    ];
    const [selectedAddress, setSelectedAddress] = useState(addresses[0].id);

    const handleSelectAddress = (id) => {
        setSelectedAddress(id);
    };
    const { cartList } = useContext(GlobalContext);
    const totalCost = cartList.reduce((price, item) => {
        return price + (item.discountPrice * item.qty);
    }, 0);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        province: '',
        district: '',
        ward: '',
        addressDetails: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleProvinceChange = (provinceId) => {
        setFormData({
            ...formData,
            province: provinceId,
            district: '',
            ward: ''
        });
    };

    const handleDistrictChange = (districtId) => {
        setFormData({
            ...formData,
            district: districtId,
            ward: ''
        });
    };

    const handleWardChange = (wardId) => {
        setFormData({
            ...formData,
            ward: wardId
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can add your form submission logic here (e.g., API call)
    };
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <Container className="checkout-container bebas-neue-regular">
            <Row><h1 style={{ fontSize: "5rem", marginBottom: "2rem" }}>CHECKOUT</h1></Row>
            <Row>
                <Col md="7">
                    <div className="addresses-container">
                        {addresses.map(address => <AddressSelect
                            address={address}
                            selectedAddress={selectedAddress}
                            handleSelectAddress={handleSelectAddress} />)}
                        <div className="checkout-buttons">
                            <button className='checkout-confirm-btn bebas-neue-regular'>PLACE ORDER</button>
                            <button onClick={toggleModal} className="btn-modal bebas-neue-regular">
                                REGISTER NEW ADDRESS
                            </button>
                        </div>

                    </div>

                </Col>

                {modal &&
                    <div className="modal-container">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <div className='checkout-details'>

                                <h2 style={{ fontSize: "32px" }}>REGISTER A NEW ADDRESS</h2>
                                <form className='checkout-form' onSubmit={handleSubmit}>
                                    <div className="checkout-form-group">
                                        <label>First Name *</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder='Please enter your first name in alphabets'
                                            required
                                        />
                                    </div>

                                    <div className="checkout-form-group">
                                        <label>Last Name *</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder='Please enter your last name in alphabets'
                                            required
                                        />
                                    </div>

                                    <LocationSelect
                                        onProvinceChange={handleProvinceChange}
                                        onDistrictChange={handleDistrictChange}
                                        onWardChange={handleWardChange}
                                    />

                                    <div className="checkout-form-group">
                                        <label>Address Details *</label>
                                        <input
                                            type="text"
                                            name="addressDetails"
                                            value={formData.addressDetails}
                                            onChange={handleChange}
                                            placeholder='Apt, suite, unit, building, floor, etc'
                                            required
                                        />
                                    </div>

                                    <div className="checkout-form-group">
                                        <label>Phone*</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            placeholder='Enter 10-11 digits starting from 0'
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button className='checkout-confirm-btn' type="submit">Register</button>
                                    <button className="close-modal" onClick={toggleModal}>
                                        CLOSE
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                }

                <Col md="1"></Col>
                <Col>
                    <Row className='checkout-summary'>
                        <div className="order-summary">
                            <h2 style={{ fontSize: "20px" }}>Order Summary | {cartList.length} Item(s) <Link to={'/cart'} className="edit-link">EDIT</Link></h2>
                            <div className="summary-item" style={{ fontSize: "14px", fontFamily: "sans-serif" }}>
                                <span> Item(s) subtotal</span>
                                <span>${totalCost}</span>
                            </div>
                            <div className="summary-item" style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                                <span>Shipping</span>
                                <span>0$</span>
                            </div>
                            <div className="summary-total" style={{ fontSize: "20px" }}>
                                <span>SUBTOTAL</span>
                                <span>${totalCost}</span>
                            </div>
                            <div className="summary-item" style={{ fontSize: "14px", fontFamily: "sans-serif" }}>
                                <span>VAT</span>
                                <span>${totalCost / 20}</span>
                            </div>
                            <div className="order-total" style={{ fontSize: "20px" }}>
                                <span>ORDER TOTAL</span>
                                <span>${totalCost + totalCost / 20}</span>
                            </div>
                        </div>
                    </Row>

                    <Row className='checkout-items'>
                        <Row className="order-items">
                            <h2>Order Item(s)</h2>
                            {cartList.map(product => (
                                <CheckoutProduct
                                    key={product.id}
                                    imageSrc={product.image.original}
                                    quantity={product.qty}
                                />
                            ))}
                        </Row>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Checkout;
