import "./App.css";
import Navbar from "./component/Navbar";
import axios from "axios";
import React from "react";
import Card from "./component/Card";
import Cart from "./component/Cart";
import Configbar from "./component/Configbar";
import { Toaster } from "react-hot-toast";

function App() {
  const [items, setitems] = React.useState([]);
  const [content, setcontent] = React.useState("");
  const [category, setcategory] = React.useState("");
  const [cartItems, setcartItems] = React.useState([]);
  const [subTotal, setsubTotal] = React.useState(0);
  const [showCart, setshowCart] = React.useState(false);

  const displayCart = () => {
    setshowCart(!showCart);
    document.body.classList.toggle("no-scroll");
  };

  const cartStorage = localStorage.getItem("cart");

  const subtotalstorage = localStorage.getItem("subtotal");

  const storeCart = () => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    localStorage.setItem("subtotal", JSON.stringify(subTotal));
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
    if (subtotalstorage) {
      const parsed = JSON.parse(subtotalstorage);
      setsubTotal(parsed);
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
      <Toaster></Toaster>
      <Navbar
        func={setcontent}
        showCart={displayCart}
        cartQuantity={cartItems}
      ></Navbar>
      {showCart && (
        <Cart
          subTotal={subTotal}
          setsubTotal={setsubTotal}
          showCart={displayCart}
          cartItems={cartItems}
          setcartItems={setcartItems}
        ></Cart>
      )}

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
                setsubTotal={setsubTotal}
                item={item}
                cartItems={cartItems}
                setcartItems={setcartItems}
                storeItems={storeCart}
                key={k}
              ></Card>
            ))
        )}
      </div>
    </div>
  );
}

export default App;
