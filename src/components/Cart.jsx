import React, { useContext } from 'react';
import '../styles/Cart.css';
import { contextForCart } from './CartContext';

export default function Cart() {

  const {cart, removeItem, clear} = useContext(contextForCart);

  return (
    <div className='cart-products-wrapper'>
      {cart.map((product) => { 
        return (
          <div key={product.id} className="cart-product-container">
            <img src={product.pictureURL} className="cart-product-img" alt={product.name} />  
            <h3 className="card-product-name"> {product.name} {product.id} </h3>
            <p className="card-product-amount"> Quantity: {product.amount} </p>
            <p className="card-product-price"> Price: ${product.price*product.amount} </p>
            <button onClick={()=>{removeItem(product.id)}}> ELIMINAR </button>
          </div>
        )
      })}
      <button onClick={clear}> CLEAR BAG </button>
      <button onClick={()=>{console.log(cart)}}> SEE CART IN CONSOLE</button>
    </div>
  )
}
