import React, { useState, createContext } from 'react';

export const contextForCart = createContext();

export default function CartContext( {children} ) {

    const [cart, setCart] = useState([]); 
    const [refreshCart, setRefreshCart] = useState(false);
    // RefreshCart es para forzar el re-render del carrito despues de eliminar un elemento del mismo.

    function addItem(item, quantity) {
      if (isInCart(item.id)) {
        alert("Ya existe en el carrito")
      }
      else {
        item.amount = quantity;
        setCart([...cart, item]);
      }
    }
    function removeItem(itemId){
        const indexFounded = cart.findIndex(el => {return el.id === itemId});
        cart.splice(indexFounded, 1)
        setCart(cart)
        setRefreshCart(!refreshCart);
    }
    function clear(){
        setCart([]);
    }
    function isInCart(id){
        const result = cart.find((el) => el.id === id);
        const check = cart.includes(result);
        return check;
    }

  return (
    <contextForCart.Provider value={{cart, setCart, addItem, removeItem, clear, isInCart}}> 
      {children}
    </contextForCart.Provider>
  )
}
