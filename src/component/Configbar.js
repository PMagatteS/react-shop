import React from "react";
import { category } from "../constant";

const Configbar = ({ func }) => {
  return (
    <div className="configbar">
      <div className="category">
        <select id="select-category" onChange={(e) => func(e.target.value)}>
          <option value="">Select a category</option>
          {category.map((element, k) => (
            <option value={element} key={k}>
              {element}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Configbar;
