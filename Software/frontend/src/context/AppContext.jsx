import React, { useState } from 'react'
export const GlobalContext = React.createContext();
const AppContext = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const [alreadyInCart, setAlreadyInCartCart] = useState(false);
    function addToCart(cartItem) {
        let isPresent = false;
		cartList.forEach((product)=>{
			if (cartItem.id === product.id)
			isPresent = true;
		})
		if (isPresent){
            setAlreadyInCartCart(true);
            setTimeout(() => setAlreadyInCartCart(false), 2000);
			return ;
		}else {
            setAddedToCart(true);
            setTimeout(() => setAddedToCart(false), 2000);
        }
		setCartList([...cartList,{ ...cartItem, qty: 1 }]);
    }
    return (
        <GlobalContext.Provider value={{
            cartList, setCartList,
            isLoading, setIsLoading,
            addToCart, addedToCart,alreadyInCart
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext