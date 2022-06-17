import "./App.css";
import Navbar from "./component/Navbar";
import { products } from "./constant";
import React from "react";
import Main from "./pages/Main";

function App() {
  const [content, setcontent] = React.useState("");
  const write = (newcontent) => {
    setcontent(newcontent);
  };
  const nonpricise = products.filter((element) => element.includes(content));
  const pricise = products.filter((element) => element.startsWith(content, 0));
  const searchArray = pricise.length > 0 ? pricise : nonpricise;
  console.log(searchArray);
  return (
    <div className="App">
      <Navbar func={write}></Navbar>
      {searchArray.map((product, k) => (
        <h2 key={k}>{product}</h2>
      ))}
      <Main></Main>
    </div>
  );
}

export default App;
