import React from "react";

interface CartItem {
  id: string;
  product_name: string;
  quantity: number;
  unit_price: number;
}

interface Props {
  items: CartItem[];
}

export default function Cart({ items }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Shopping Cart</h2>
      {items.length === 0 && <p>Your cart is empty</p>}
      {items.map(item => (
        <div key={item.id} className="flex justify-between py-1">
          <span>{item.product_name} x {item.quantity}</span>
          <span>${item.unit_price * item.quantity}</span>
        </div>
      ))}
    </div>
  );
}