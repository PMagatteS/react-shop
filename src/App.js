import "./App.css";
import Navbar from "./component/Navbar";
import { products } from "./constant";
import axios from "axios";
import React from "react";
import Card from "./component/Card";
import Configbar from "./component/Configbar";

function App() {
  const [items, setitems] = React.useState([]);
  const [content, setcontent] = React.useState("");
  const search = (newcontent) => {
    setcontent(newcontent);
  };
  const nonpricise = products.filter((element) =>
    element.name.includes(content)
  );
  const pricise = products.filter((element) =>
    element.name.startsWith(content, 0)
  );
  const searchArray = pricise.length > 0 ? pricise : nonpricise;

  React.useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    return await axios
      .get("https://fakestoreapi.com/products?limit=12")
      .then((response) => setitems(response))
      .catch((err) => console.log(err));
  };
  const log = () => {
    console.log(items.data);
  };
  return (
    <div className="App">
      <Navbar func={search}></Navbar>
      {/* {searchArray
        .sort((a, b) => b.price - a.price)
        .map((product, k) => (
          <h2 key={k}>{product.name + ":  $" + product.price}</h2>
        ))}
      {searchArray.length < 1 ? <p>Nothing found</p> : null} */}
      <button onClick={log}>log</button>
      <Configbar list={searchArray} onclick={log}></Configbar>
      <div className="items-container">
        {items.length < 1 ? (
          <h2>no items</h2>
        ) : (
          items.data.map((item, k) => <Card item={item} key={k}></Card>)
        )}
      </div>
    </div>
  );
}

export default App;
