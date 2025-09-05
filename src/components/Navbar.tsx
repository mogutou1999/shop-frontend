import React from "react";
import AddProductModal from "./AddProductModal";

interface NavbarProps {
  cartItems: any[];
}

const Navbar: React.FC<NavbarProps> = ({ cartItems }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <div>我的商城</div>
      <div>购物车: {cartItems.length}</div>
      <AddProductModal />
    </nav>
  );
};

export default Navbar;
