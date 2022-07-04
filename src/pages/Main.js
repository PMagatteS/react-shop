import React from "react";
import Card from "../component/Card";
const Main = ({ items }) => {
  return (
    <div className="items-container">
      {items.map((item) => (
        <Card item={item}></Card>
      ))}
    </div>
  );
};

export default Main;
