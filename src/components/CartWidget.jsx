import React from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import '../styles/CartWidget.css'

export default function CartWidget () {
    return (
        <button className='bag-btn'>
            <LocalMallIcon color='dark'/>
            <div className='cart-counter'> 1 </div>
        </button>
    )
};