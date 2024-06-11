import React, { useContext, useEffect, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './Checkout.css';
import { GlobalContext } from '../../context/AppContext';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import LocationSelect from '../../components/LocationSelect/LocationSelect';
import AddressSelect from './AddressSelect/AddressSelect';
import api from '../../api/axiosConfig'
import Loader from '../../components/Loader/Loader'
import ToastUtil from '../../utils/utils';
function Checkout() {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedAddress, setSelectedAddress] = useState();
    const [cartList, setCartList ] = useState([]);
    const [total, setTotal] = useState();
    const navigate = useNavigate();
    async function fetchAddresses() {
        try {
            const response = await api.get('/address', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setAddresses(response.data);
            if(response.data.length)
                setSelectedAddress(response.data.find(address => address.type === 1).id);
            setLoading(false); // Directly set loading to false after fetching
        } catch (err) {
            console.error('Error:', err);
            localStorage.setItem('onNext', '/checkout');
            navigate("/sign-in");
        }
    }
    const fetchCart = async () => {
        try {
            const response = await api.get('/cart', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setCartList(response.data.listItems);
            setTotal(response.data.total)
            if (response.data.listItems.length === 0) {
                ToastUtil.showToastError("Empty Cart");
                navigate('/cart')
            }
            setLoading(false); // Directly set loading to false after fetching
        } catch (err) {
            console.error('Error fetching cart:', err);
        }
    };
    function placeOrder() {
        api.post(`order?addressId=${selectedAddress}`, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(function (response) {
            ToastUtil.showToastSuccess("Order placed successfully");
            navigate('/')
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        })
    }
    useEffect(() => {
        fetchCart();
        fetchAddresses();
    }, []);

    const handleSelectAddress = (id) => {
        setSelectedAddress(id);
    };
    
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
        // e.preventDefault();
        api.post("/address", formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(function(response) {
            navigate('/checkout')
            ToastUtil.showToastSuccess("Create Address Successful")
            console.log(response);
        }) .catch(function(error) {
            ToastUtil.showToastError("Fail Create Address")
            console.log(error);
        })
        
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
    {console.log(selectedAddress === undefined)}
    return (<>
        {loading ? (
            <Loader />
        ) : (
            
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
                                <button
                                    className='checkout-confirm-btn bebas-neue-regular'
                                    onClick={placeOrder}
                                    disabled={selectedAddress === undefined ? true : false}
                                >
                                    PLACE ORDER
                                </button>
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
                                    <span>${total}</span>
                                </div>
                                <div className="summary-item" style={{ fontSize: "16px", fontFamily: "sans-serif" }}>
                                    <span>Shipping</span>
                                    <span>0$</span>
                                </div>
                                <div className="summary-total" style={{ fontSize: "20px" }}>
                                    <span>SUBTOTAL</span>
                                    <span>${total}</span>
                                </div>
                                <div className="summary-item" style={{ fontSize: "14px", fontFamily: "sans-serif" }}>
                                    <span>VAT</span>
                                    <span>${total / 20}</span>
                                </div>
                                <div className="order-total" style={{ fontSize: "20px" }}>
                                    <span>ORDER TOTAL</span>
                                    <span>${total + total / 20}</span>
                                </div>
                            </div>
                        </Row>

                        <Row className='checkout-items'>
                            <Row className="order-items">
                                <h2>Order Item(s)</h2>
                                {cartList.map(product => (
                                    <CheckoutProduct
                                        key={product.id}
                                        imageSrc={product.imageUrl.original}
                                        quantity={product.quantity}
                                    />
                                ))}
                            </Row>
                        </Row>
                    </Col>
                </Row>
            </Container>)}</>
    );
}

export default Checkout;
