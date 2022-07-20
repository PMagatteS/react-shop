import React from "react";
import CartItem from "./CartItem";
import { BiArrowBack } from "react-icons/bi";


const Cart = ({ showCart, cartItems, setcartItems }) => {
  return (
    <div className="cart-overlay">
      <div className="cart">
        <div className="cart-banner">
          <BiArrowBack className="cart-back" onClick={showCart}></BiArrowBack>
          <h2>CART</h2>
        </div>

        {cartItems
          .sort((a, b) => b.added - a.added)
          .map((item, k) => (
            <CartItem
              key={k}
              item={item}
              items={cartItems}
              setquantity={setcartItems}
            ></CartItem>
          ))}
        <button className="valid">Valid</button>
      </div>
    </div>
  );
};

export default Cart;
