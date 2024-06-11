import React, { useState } from 'react'
import ToastUtil from '../utils/utils';
import api from '../api/axiosConfig'
export const GlobalContext = React.createContext();
const AppContext = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [sideBarOn, setSideBarOn] = useState(false)
    const [isLogIn, setIsLogIn] = useState(false);

    function checkIsLogIn() {
        if(localStorage.getItem('token')) setIsLogIn(true);
        else setIsLogIn(false);
    }
    function addToCart(cartItem) {
        if(isLogIn === false) {
            ToastUtil.showToastError("Please log in");
            return;
        }
        
        let isPresent = false;
        cartList.forEach((product) => {
            if (cartItem.id === product.id)
                isPresent = true;
        })
        if (isPresent) {
            ToastUtil.showToastWarning("Item already in cart");
            return;
        } else {
            api.post(`cart?productId=${cartItem.id}&quantity=1`, {}, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                  }
            }).then(function(response) {
                console.log(response);
            }).catch(function(error) {
                console.log(error);
            })
            ToastUtil.showToastSuccess("Item added to cart");

        }
        setCartList([...cartList, { ...cartItem, qty: 1 }]);
    }
    async function getUserCart() {
        const response = await api.get('/cart', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              }
        });
        console.log(response);
    }
    return (
        <GlobalContext.Provider value={{
            cartList, setCartList,
            addToCart, 
            sideBarOn, setSideBarOn,
            isLogIn, setIsLogIn, checkIsLogIn, getUserCart
        }}>
            {children}

        </GlobalContext.Provider>
    )
}

export default AppContext