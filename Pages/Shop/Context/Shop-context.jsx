import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../../../Components/Products'
export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let Cart = {}
    for (let i =1; i < PRODUCTS.length + 1; i++){
      Cart[i] = 0  
    }
    return Cart
}


export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems) {
        if (cartItems[item] > 0) {
          let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
          totalAmount += cartItems[item] * itemInfo.Price;
        }
      }
      return totalAmount;
    };



    const addToCart = (itemId) => {
      setCartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]: prev[itemId] - 1 }))
      }
      console.log(cartItems);

      const contextValue = {cartItems,addToCart,removeFromCart,getTotalCartAmount}
      
      return (
    <ShopContext.Provider value={contextValue}>
    {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContext
