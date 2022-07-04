import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={item.image} alt="" />
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default Card;
