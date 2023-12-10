import React from "react";
import Add from '../img/10.jpg'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img src={Add} alt="" />
        <span>Kavindu</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
