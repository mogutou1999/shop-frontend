import React, { useEffect, useState } from "react";
import Cart from "../components/Cart";
import ProductCard from "../components/ProductCard";

// 模拟 API
const getProducts = async () => [
  { id: "1", name: "可乐", price: 5, image: "" },
  { id: "2", name: "薯片", price: 10, image: "" },
];

const getCart = async () => [];

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface HomePageProps {
  cartItems: any[];
  updateCart: (items: any[]) => void;
}

export default function HomePage({ cartItems, updateCart }: HomePageProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
    getCart().then(updateCart).catch(console.error);
  }, []);

  const handleCheckout = () => {
    alert("结算流程这里写...");
  };

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => setShowCart(!showCart)}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        {showCart ? "关闭购物车" : `查看购物车 (${cartItems.length})`}
      </button>

      {showCart && <Cart items={cartItems} onCheckout={handleCheckout} />}

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
