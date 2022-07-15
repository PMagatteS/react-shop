import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Card = ({ item, cartItems, setcartItems }) => {
  const [quantity, setquantity] = React.useState(1);
  const plus = () => {
    setquantity((qty) => qty + 1);
  };
  const minus = () => {
    if (quantity === 1) return;
    setquantity((qty) => qty - 1);
  };
  const addToCart = () => {
    // should be an id rather than name
    const check = cartItems.find((el) => el.name === item.title);
    if (check) {
      const filtered = cartItems.filter((el) => el === check);
      check.qty += quantity;
      setcartItems([...filtered, check]);
    } else {
      setcartItems((items) => [
        ...items,
        {
          name: item.title,
          image: item.image,
          price: item.price,
          qty: quantity,
          added: new Date(),
        },
      ]);
    }
  };
  return (
    <div className="card">
      <div className="card-img">
        <img src={item.image} alt="" />
      </div>
      <p className="title">{item.title}</p>
      <div className="product-price">
        <p className="price">${item.price}</p>
        <p className="quantity">
          <span className="minus" onClick={minus}>
            <AiOutlineMinus />
          </span>
          <span className="product-quantity">{quantity}</span>
          <span className="plus" onClick={plus}>
            <AiOutlinePlus />
          </span>
        </p>
      </div>
      <button className="add-to-cart" onClick={addToCart}>
        add to cart
      </button>
    </div>
  );
};

export default Card;
