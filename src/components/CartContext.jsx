import React, { useState, createContext, useEffect } from 'react'

export const contextForCart = React.createContext();

export default function CartContext( {children} ) {

    const [cart, setCart] = useState([])
    const [refreshCart, setRefreshCart] = useState(false)

    function addItem(item, quantity){
        
    }
    function removeItem(itemId){
        const indexFounded = cart.findIndex(el => {return el.id === itemId});
        cart.splice(indexFounded, 1)
        setCart(cart)
        setRefreshCart(!refreshCart)
    }
    function clear(){
        setCart([]);
    }
    function isInCart(id){
        const result = cart.find((el) => el.id === id);
        const check = cart.includes(result);
        return check;
    }
    useEffect(() => {
      console.log("renderizo again")
    }, [refreshCart])
    
  return (
    <contextForCart.Provider value={{cart, setCart, addItem, removeItem, clear, isInCart}}> 
        {children}
    </contextForCart.Provider>
  )
}
