import React from "react";

interface CartProps {
  items: any[];
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onCheckout }) => {
  return (
    <div className="border p-2 rounded mb-4">
      {items.map((item, idx) => (
        <div key={idx}>
          {item.name} × {item.quantity} = ¥{item.price * item.quantity}
        </div>
      ))}
      <button onClick={onCheckout} className="mt-2 px-2 py-1 bg-blue-500 text-white rounded">
        去结算
      </button>
    </div>
  );
};

export default Cart;
