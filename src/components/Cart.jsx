import React, { useContext, useEffect, useState } from 'react'
import '../styles/Cart.css'
import { contextForCart } from './CartContext';

export default function Cart() {

  const {cart, setCart, addItem, removeItem, clear, isInCart} = useContext(contextForCart);

  return (
    <div className='cart-products-wrapper'>
      {cart.map((product) => { 
        return (
          <div key={product.id} className="card-product-container">
            <img src={product.pictureURL} className="card-product-img"/>  
            <h3 className="card-product-name"> {product.name} {product.id} </h3>
            <p className="card-product-amount"> Quantity: {product.amount} </p>
            <p className="card-product-price"> Price: ${product.price*product.amount} </p>
            <button onClick={()=>{removeItem(product.id)}}> ELIMINAR </button>
          </div>
        )
      })}
      <button onClick={clear}> CLEAR BAG </button>
    </div>
  )
}
