import React, { useState } from 'react'
export const GlobalContext = React.createContext();
const AppContext = ({ children }) => {
    const [product, setProduct] = useState({});
    const [cartList, setCartList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    return (
        <GlobalContext.Provider value={{
            product, setProduct,
            cartList, setCartList,
            isLoading, setIsLoading,
}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext