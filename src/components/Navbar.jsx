import React, { useState } from 'react';
import logo from '../img/logo.jpg';
import '../styles/Navbar.css';
import CartWidget from './CartWidget';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';

export default function Navbar (){

    const [dropdownActive, setDropdownActive] = useState(false);
    const [menuDropdownActive, setMenuDropdownActive] = useState(false);

    return(
        <div>
            <nav className='nav'>
                <Link to='/' className='logo-link'> <img src={logo} alt='logo' className='brand'/> </Link>
                <ul className='nav-ul'>
                    <li><Link to='/'> Home </Link> </li>
                    <li><Link to='/shop'> Shop </Link> </li>
                    <li><Link to='/about'> About </Link> </li>
                    <li><Link to='/contact'> Contact </Link> </li>
                    <li className='categories-menu' > 
                        Categories <ArrowDropDownIcon /> 
                        <ul className="categories-dropdown">
                            <li><Link to='/category/candles'> Candles </Link> </li>
                            <li><Link to='/category/diffusers'> Diffusers </Link> </li>
                            <li><Link to='/category/others'> Others </Link> </li>
                        </ul>
                    </li>
                    <li className='menu-h'></li> 
                    <Link to='/cart'> <CartWidget/> </Link> 
                </ul>
                <ul className={ menuDropdownActive ? 'menu-dropdown__active' : 'menu-dropdown__inactive'}>
                    <li><Link to='/'> Home </Link> </li>
                    <li><Link to='/shop'> Shop </Link> </li>
                    <li><Link to='/about'> About </Link> </li>
                    <li><Link to='/contact'> Contact </Link> </li>
                    <li className='categories-menu' onClick={()=> {setDropdownActive(!dropdownActive)}}> Categories <ArrowDropDownIcon /> 
                        <ul className={ dropdownActive ? "categories-dropdown__inactive" : "categories-dropdown__hidden"}>
                            <li><Link to='/category/candles'> Candles </Link> </li>
                            <li><Link to='/category/diffusers'> Diffusers </Link> </li>
                            <li><Link to='/category/others'> Others </Link> </li>
                            </ul>
                    </li>
                    <li><Link to='/cart'> <CartWidget/> </Link> </li>
                </ul>
                <button className='toggler-btn' onClick={()=>{setMenuDropdownActive(!menuDropdownActive)}}>
                    <MenuIcon fontSize='large' className='toggler'/>
                </button>
                
            </nav> 
        </div>
    )
};





