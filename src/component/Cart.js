import React from "react";
import CartItem from "./CartItem";

const Cart = ({ showCart, cartItems, setcartItems }) => {
  const log = () => {
    console.log(cartItems);
  };

  return (
    <div className="cart-overlay">
      <div className="cart">
        <h2>CART</h2>
        <button onClick={showCart}>hide</button>
        <button onClick={log}>log</button>
        {cartItems.map((item, k) => (
          <CartItem
            key={k}
            item={item}
            items={cartItems}
            setquantity={setcartItems}
          ></CartItem>
        ))}
        <button>add</button>
      </div>
    </div>
  );
};

export default Cart;
