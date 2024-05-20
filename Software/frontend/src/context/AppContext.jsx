import React, { useState } from 'react'
export const GlobalContext = React.createContext();
const AppContext = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const [alreadyInCart, setAlreadyInCartCart] = useState(false);
    const [sideBarOn, setSideBarOn] = useState(false)
    const [isLogIn, setIsLogIn] = useState(false);
    function addToCart(cartItem) {
        if(isLogIn === false) {
            window.alert("Please log in");
            return;
        }
        console.log(cartItem.id);
        let isPresent = false;
        cartList.forEach((product) => {
            if (cartItem.id === product.id)
                isPresent = true;
        })
        if (isPresent) {
            setAlreadyInCartCart(true);
            setTimeout(() => setAlreadyInCartCart(false), 2000);
            return;
        } else {
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 2000);
        }
        setCartList([...cartList, { ...cartItem, qty: 1 }]);
    }
    return (
        <GlobalContext.Provider value={{
            cartList, setCartList,
            isLoading, setIsLoading,
            addToCart, addedToCart, alreadyInCart,
            sideBarOn, setSideBarOn,
            isLogIn, setIsLogIn
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext