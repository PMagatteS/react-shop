import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import toast from "react-hot-toast";

const Card = ({ item, cartItems, setcartItems }) => {
  const [quantity, setquantity] = React.useState(1);
  const plus = () => {
    setquantity((qty) => qty + 1);
  };
  const minus = () => {
    if (quantity === 1) return;
    setquantity((qty) => qty - 1);
  };
  const addToCart = (e) => {
    const top = e.target.offsetParent.offsetTop;
    const left = e.target.offsetParent.offsetLeft;
    const bodyWidth = document.body.offsetWidth;
    const root = document.documentElement;
    const cardWidth = e.target.offsetParent.offsetWidth;
    root.style.setProperty("--top-card", top + "px");
    root.style.setProperty("--left-card", left + "px");
    root.style.setProperty("--destination", bodyWidth - cardWidth + "px");
    toast.success("succesfully added");
    e.target.parentElement.classList.add("buyed");
    setTimeout(() => e.target.parentElement.classList.remove("buyed"), 500);
    // should be an id rather than name
    console.log(e.target.parentElement);
    const check = cartItems.find((el) => el.name === item.title);
    if (check) {
      const filtered = cartItems.filter((el) => el !== check);
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
          added: Date.now(),
        },
      ]);
    }
    setquantity(1);
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
