import React from "react";
import logo from "../img/logo.jpg";
import "../styles/Navbar.css";
import CartWidget from "./CartWidget";
import MenuIcon from "@mui/icons-material/Menu";

// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <img src={logo} alt="logo" className="logo" />
        <ul className="nav-ul">
          <li>
            <a href="http://google.com">Home</a>
          </li>
          <li>
            <a href="http://google.com">Shop</a>
          </li>
          <li>
            <a href="http://google.com">About</a>
          </li>
          <li>
            <a href="http://google.com">Contact</a>
          </li>
          <li className="menu-h"></li>
          <CartWidget />
        </ul>
        <button className="toggler-btn">
          <MenuIcon fontSize="large" className="toggler" />
        </button>
      </nav>
    </div>
  );
}
