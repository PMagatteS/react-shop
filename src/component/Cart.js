import React from "react";
import CartItem from "./CartItem";
import { BiArrowBack } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";

const Cart = ({ showCart, cartItems, setcartItems, subTotal, setsubTotal }) => {
  return (
    <div className="cart-container">
      <div className="cart-overlay" onClick={showCart}></div>
      <div className="cart">
        <div className="cart-banner">
          <BiArrowBack className="cart-back" onClick={showCart}></BiArrowBack>

          <h2 className="subtotal">Subtotal: ${subTotal.toFixed(2)}</h2>
        </div>

        {cartItems
          .sort((a, b) => b.added - a.added)
          .map((item, k) => (
            <CartItem
              setsubTotal={setsubTotal}
              key={k}
              item={item}
              items={cartItems}
              setquantity={setcartItems}
            ></CartItem>
          ))}
        {cartItems.length > 0 ? (
          <div className="checkout">
            <button className="checkout-button">Proceed to checkout</button>
          </div>
        ) : (
          <div className="empty">
            <BsFillCartPlusFill
              className="empty-cart"
              onClick={showCart}
            ></BsFillCartPlusFill>
            <h2>Your cart is empty</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
