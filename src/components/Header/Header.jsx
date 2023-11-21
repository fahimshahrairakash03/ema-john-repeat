import React from "react";
import "./Header.css";
import logo from "../../assets/images/Logo.svg";

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <div className="menu">
        <a href="">Home</a>
        <a href="">Order</a>
        <a href="">Order Review</a>
        <a href="">Login</a>
      </div>
    </nav>
  );
};

export default Header;
