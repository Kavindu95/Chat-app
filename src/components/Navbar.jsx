import React from "react";
import Add from '../img/10.jpg'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat</span>
      <div className="user">
        <img src={Add} alt="" />
        <span>Kavindu</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
