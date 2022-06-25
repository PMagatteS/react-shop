import React from "react";
import { category } from "../constant";

const Configbar = ({ list }) => {
  const sort = (e) => {
    if (e.target.id === "lowest") {
      list.sort();
      console.log(list);
    }
  };
  return (
    <div className="configbar">
      <div className="radio">
        <input type="radio" id="lowest" name="price-sort" onChange={sort} />
        <label htmlFor="lowest">Lowest price</label>
        <input type="radio" id="highest" name="price-sort" onChange={sort} />
        <label htmlFor="highest">Highest price</label>
      </div>
      <div className="category">
        <select id="select-category">
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
