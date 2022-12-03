import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <NavLink to="/">
        <img className="navLogo" src="../img/logo.webp" />
      </NavLink>
      <div className="navLinks">
        <NavLink to="/" className="homeLink">
          Home
        </NavLink>
        <NavLink to="/shop" className="shopLink">
          Shop
        </NavLink>
        <NavLink to="/contact" className="contactLink">
          Contact
        </NavLink>
        <NavLink to="/about" className="aboutLink">
          About
        </NavLink>
        <div className="shoppingCartIcon">
          <span className="material-symbols-rounded">shopping_cart</span>
          {/* <div className="shoppingCartQuantity">0</div> */}
        </div>
      </div>
    </>
  );
}
