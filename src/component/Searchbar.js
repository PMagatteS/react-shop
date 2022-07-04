import React from "react";

const Searchbar = (props) => {
  const [searchValue, setsearchValue] = React.useState("");
  const search = (e) => {
    e.preventDefault();
    props.function(searchValue);
  };

  return (
    <div className="searchbar">
      <form action="" className="form" onSubmit={search}>
        <input
          type="search"
          onChange={(e) => {
            setsearchValue(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Searchbar;
