import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCloseCircle,
} from "react-icons/ai";
// import BsTrash from "react-icons/bs";

const CartItem = ({
  item: { qty, price, image, name },
  setquantity,
  items,
}) => {
  const total = qty * price;
  const plus = () => {
    const itm = items.find((item) => item.name === name);
    const filterd = items.filter((item) => item !== itm);
    itm.qty++;
    setquantity([...filterd, itm]);
  };
  const minus = () => {
    const itm = items.find((item) => item.name === name);
    if (itm.qty === 1) return;
    const filterd = items.filter((item) => item !== itm);
    itm.qty--;
    setquantity([...filterd, itm]);
  };
  const deleteItem = () => {
    const itm = items.find((item) => item.name === name);
    const filterd = items.filter((item) => item !== itm);
    setquantity([...filterd]);
  };
  return (
    <div className="cart-items">
      <div className="cart-image">
        <img src={image} alt="" />
      </div>
      <div className="name-quantity">
        <p>{name}</p>
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
      <div className="total">Total: ${total}</div>
      <div className="delete">
        <AiOutlineCloseCircle
          onClick={deleteItem}
          color="red"
          size={30}
          cursor="pointer"
        ></AiOutlineCloseCircle>
      </div>
    </div>
  );
};

export default CartItem;
