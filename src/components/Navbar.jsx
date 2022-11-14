import React from 'react';
import logo from '../img/logo.jpg';
import '../styles/Navbar.css';
import CartWidget from './CartWidget';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar (){
    return(
        <div>
            <nav className='nav'>
                <Link to='/' className='logo-link'> <img src={logo} alt='logo' className='brand'/> </Link>
                <ul className='nav-ul'>
                    
                    <li><Link to='/'> Home </Link> </li>
                    <li><Link to='/shop'> Shop </Link> </li>
                    <li><Link to='/about'> About </Link> </li>
                    <li><Link to='/contact'> Contact </Link> </li>
                    <li><Link to='/category/candles'> Candles </Link> </li>
                    <li><Link to='/category/diffusers'> Diffusers </Link> </li>
                    <li><Link to='/category/others'> Others </Link> </li>
                    <li className='menu-h'></li>
                    <Link to='/cart'> <CartWidget/> </Link> 
                </ul>
                <button className='toggler-btn'>
                    <MenuIcon fontSize='large' className='toggler'/>
                </button>
                
            </nav> 
        </div>
    )
};





