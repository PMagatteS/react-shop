import React from "react";
import Searchbar from "./Searchbar";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = ({ func, showCart, cartQuantity }) => {
  return (
    <div className="navbar">
      <Searchbar function={func}></Searchbar>
      <div
        className="cart-icon"
        onClick={showCart}
        data-qty={cartQuantity.length}
      >
        <AiOutlineShoppingCart color="white" size={30}></AiOutlineShoppingCart>
      </div>
    </div>
  );
};

export default Navbar;
