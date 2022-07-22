import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const CartItem = ({
  item: { qty, price, image, name },
  setquantity,
  items,
  setsubTotal,
}) => {
  const total = qty * price;
  const plus = () => {
    const itm = items.find((item) => item.name === name);
    const filterd = items.filter((item) => item !== itm);
    itm.qty++;
    setquantity([...filterd, itm]);
    setsubTotal((sum) => sum + price);
  };
  const minus = () => {
    const itm = items.find((item) => item.name === name);
    if (itm.qty === 1) return;
    const filterd = items.filter((item) => item !== itm);
    itm.qty--;
    setquantity([...filterd, itm]);
    setsubTotal((sum) => sum - price);
  };
  const deleteItem = () => {
    const itm = items.find((item) => item.name === name);
    const filterd = items.filter((item) => item !== itm);
    setquantity([...filterd]);
    setsubTotal((sum) => sum - price * qty);
  };
  return (
    <div className="cart-items">
      <div className="cart-image">
        <img src={image} alt="" />
      </div>
      <div className="name-quantity">
        <p className="title">{name}</p>
        <p className="quantity">
          <span className="minus">
            <AiOutlineMinus onClick={minus} />
          </span>
          <span className="product-quantity">{qty}</span>
          <span className="plus" onClick={plus}>
            <AiOutlinePlus />
          </span>
        </p>
      </div>
      <div className="total">Total: ${total.toFixed(2)}</div>
      <div className="delete">
        <AiOutlineCloseCircle
          onClick={deleteItem}
          className="delete-icon"
        ></AiOutlineCloseCircle>
      </div>
    </div>
  );
};

export default CartItem;
