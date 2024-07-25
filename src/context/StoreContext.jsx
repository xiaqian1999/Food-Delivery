import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cartItems, setCartItems] = useState({});
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            //if use enter the cart item first time into the cart, initialize with a count == 1
            setCartItems((prev) => ({...prev, [itemId]:1}))
        }
        else{
            //if use enter the cart item already inside the cart, increment by 1
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart = (itemId) => {
        //if use enter the cart item already inside the cart, decrement by 1
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    useEffect(() =>{
        console.log(cartItems);
    }, [cartItems])

    const contextValue = {
        food_list, cartItems, setCartItems, addToCart, removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;