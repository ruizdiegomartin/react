import React, { useContext } from 'react';
import '../styles/Cart.css';
import { contextForCart } from './CartContext';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

export default function Cart() {

  const {cart, removeItem, clear, totalPrice} = useContext(contextForCart);

  return (
    
    <div className='cart-products-wrapper'>
      <h2 className='cart-title'>Bag</h2>
      { (!cart.length) ? <div className="empty-cart-wrapper"><p className='empty-advise'> Bag is empty </p> <Link to='/'><button className='back-to-shop-btn'> <ArrowBackIosIcon/> BACK TO SHOP </button></Link></div> :
       cart.map((product) => {
        return (
          <div key={product.id} className="cart-product-container">
            <img src={product.pictureURL} className="cart-product-img" alt={product.name} />  
            <div className='info-container'>
              <h3 className="cart-product-name"> {product.name} </h3>
              <div className='info-group'>
                <p className="info-group__title"> Quantity: </p><p className='info-group__value info-variety'>{product.amount} </p>
              </div>
              <div className='info-group'>
              <p className="info-group__title"> Price: $</p><p className='info-group__value'>{product.price*product.amount} </p>
              </div>
              <button onClick={()=>{removeItem(product.id)}} className="delete-btn"> <DeleteForeverIcon fontSize="large"/> </button>
            </div>
            
          </div>
        )
      })}
      { (cart.length) 
      ? <>
        <div className='cart-summary'>
          <button onClick={clear} className="clear-cart-btn"> CLEAR BAG </button> 
          <div className='total-price-group'>
            <p className='total-price__title'> TOTAL: </p><p className='total-price__amount'>${totalPrice}</p>
          </div>
        </div>
        <div className='checkout-btn-div'>
          <Link to='/'><button className='clear-cart-btn'><ArrowBackIosIcon/>BACK TO SHOP </button></Link>
          <Link to='/checkout'><button className='add-to-cart-btn checkout-btn'> CHECKOUT <ShoppingCartCheckoutIcon/></button></Link>
        </div>
        </>
      : ""
      }
    </div>
  )
}
