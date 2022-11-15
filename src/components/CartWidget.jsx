import LocalMallIcon from '@mui/icons-material/LocalMall';
import React, { useContext } from 'react';
import '../styles/CartWidget.css';
import { contextForCart } from './CartContext';

export default function CartWidget () {
    const {cart} = useContext(contextForCart);

    return (
        <button className='bag-btn'>
            <LocalMallIcon color='dark'/>
            <div className='cart-counter'> {cart.length} </div>
        </button>
    )
};