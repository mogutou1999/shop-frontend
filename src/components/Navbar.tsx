import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">Shop Bot</Link>
      <Link to="/checkout" className="text-blue-500">Checkout</Link>
    </nav>
  );
}