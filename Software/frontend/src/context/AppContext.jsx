import React, { useState } from 'react'
export const GlobalContext = React.createContext();
const AppContext = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    function addToCart(cartItem) {
        let isPresent = false;
		cartList.forEach((product)=>{
			if (cartItem.id === product.id)
			isPresent = true;
		})
		if (isPresent){
            window.alert('Item already in cart')
			return ;
		}
		setCartList([...cartList,{ ...cartItem, qty: 1 }]);
    }
    return (
        <GlobalContext.Provider value={{
            cartList, setCartList,
            isLoading, setIsLoading,
            addToCart
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext