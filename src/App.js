import "./App.css";
import Navbar from "./component/Navbar";
import { products } from "./constant";
import React from "react";
import Main from "./pages/Main";
import Configbar from "./component/Configbar";

function App() {
  const check = true;
  const [content, setcontent] = React.useState("");
  const write = (newcontent) => {
    setcontent(newcontent);
  };
  const nonpricise = products.filter((element) =>
    element.name.includes(content)
  );
  const pricise = products.filter((element) =>
    element.name.startsWith(content, 0)
  );
  const searchArray = pricise.length > 0 ? pricise : nonpricise;

  return (
    <div className="App">
      <Navbar func={write}></Navbar>
      {searchArray
        .sort((a, b) => b.price - a.price)
        .map((product, k) => (
          <h2 key={k}>{product.name + ":  $" + product.price}</h2>
        ))}
      {searchArray.length < 1 ? <p>Nothing found</p> : null}
      <Configbar list={searchArray}></Configbar>
      <Main></Main>
    </div>
  );
}

export default App;
