import "./App.css";
import Navbar from "./component/Navbar";
import axios from "axios";
import React from "react";
import Card from "./component/Card";
import Cart from "./component/Cart";
import Configbar from "./component/Configbar";
import { testObj } from "./constant";

function App() {
  const [items, setitems] = React.useState([]);
  const [content, setcontent] = React.useState("");
  const [category, setcategory] = React.useState("");
  const [cartItems, setcartItems] = React.useState([]);
  const [showCart, setshowCart] = React.useState(false);
  const displayCart = () => {
    setshowCart(!showCart);
  };
  const cartStorage = localStorage.getItem("cart");
  const storeCart = () => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };
  React.useEffect(() => {
    storeCart();
  }, [cartItems]);
  React.useEffect(() => {
    loadItems();
    if (cartStorage) {
      const parsed = JSON.parse(cartStorage);
      setcartItems(parsed);
    }
  }, []);

  const loadItems = async () => {
    return await axios
      .get("https://fakestoreapi.com/products?limit=20")
      .then((response) => setitems(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Navbar
        func={setcontent}
        showCart={displayCart}
        cartQuantity={cartItems}
      ></Navbar>
      {showCart ? (
        <Cart
          showCart={displayCart}
          cartItems={cartItems}
          setcartItems={setcartItems}
        ></Cart>
      ) : null}

      <Configbar func={setcategory}></Configbar>
      <div className="items-container">
        {items.length < 1 ? (
          <h2>no items</h2>
        ) : (
          items.data
            .filter(
              (item) =>
                item.title.includes(content) &&
                item.category.startsWith(category)
            )
            .map((item, k) => (
              <Card
                item={item}
                cartItems={cartItems}
                setcartItems={setcartItems}
                storeItems={storeCart}
                key={k}
              ></Card>
            ))
        )}
        {/* <Card
          item={testObj}
          cartItems={cartItems}
          setcartItems={setcartItems}
          storeItems={storeCart}
        ></Card>
        <Card
          item={testObj}
          cartItems={cartItems}
          setcartItems={setcartItems}
          storeItems={storeCart}
        ></Card>{" "}
        <Card
          item={testObj}
          cartItems={cartItems}
          setcartItems={setcartItems}
          storeItems={storeCart}
        ></Card>{" "}
        <Card
          item={testObj}
          cartItems={cartItems}
          setcartItems={setcartItems}
          storeItems={storeCart}
        ></Card> */}
      </div>
    </div>
  );
}

export default App;
