import React from "react";
import Searchbar from "./Searchbar";
import { FaCartPlus } from "react-icons/fa";

const Navbar = ({ func }) => {
  return (
    <div className="navbar">
      <Searchbar function={func}></Searchbar>
      <div className="cart">
        <FaCartPlus color="white" size={30}></FaCartPlus>
      </div>
    </div>
  );
};

export default Navbar;
