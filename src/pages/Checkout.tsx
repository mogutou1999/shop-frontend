import { useEffect, useState } from "react";
import { getCart, checkout } from "../api/api";

interface CartItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export default function Checkout() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    getCart().then(setCart).catch(console.error);
  }, []);

  const handleCheckout = () => {
    checkout("default-cart-id") // 如果后端是多用户，这里要传用户ID或Cart ID
      .then(() => alert("结算成功"))
      .catch(console.error);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">购物车</h2>
      {cart.map((item) => (
        <div key={item.productId} className="flex justify-between mb-2">
          <span>{item.name} x {item.quantity}</span>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}
      <button
        onClick={handleCheckout}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        去结算
      </button>
    </div>
  );
}
