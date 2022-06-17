import React from "react";
import Searchbar from "./Searchbar";
import { FaCartPlus, FaHeart } from "react-icons/fa";

const Navbar = ({ func }) => {
  return (
    <div className="navbar">
      <Searchbar function={func}></Searchbar>
      <div className="cart">
        <FaHeart color="white" size={30}></FaHeart>
        <FaCartPlus color="white" size={30}></FaCartPlus>
      </div>
    </div>
  );
};

export default Navbar;
