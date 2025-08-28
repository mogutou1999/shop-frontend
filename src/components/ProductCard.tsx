import React from "react";

interface Props {
  id: number;
  name: string;
  price: number;
  stock: number;
  onAddToCart: (id: number) => void;
}

export default function ProductCard({ id, name, price, stock, onAddToCart }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">{name}</h3>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
      <button 
        disabled={stock === 0} 
        onClick={() => onAddToCart(id)}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Add to Cart
      </button>
    </div>
  );
}