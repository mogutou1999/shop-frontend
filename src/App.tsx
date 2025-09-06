import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "可乐", price: 5, quantity: 2 },
    { id: 2, name: "薯片", price: 10, quantity: 1 },
  ]);

  const updateCart = (items: any[]) => setCartItems(items);

  return (
    <>
      <Navbar cartItems={cartItems} />
      <HomePage cartItems={cartItems} updateCart={updateCart} />
    </>
  );
};

export default App;
