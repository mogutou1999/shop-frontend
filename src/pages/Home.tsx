import React, { useEffect, useState } from "react";
import { getProducts, addToCart } from "../api/api";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleAdd = (id: number) => {
    const product = products.find(p => p.id === id);
    addToCart("user-uuid", id, 1, product.name, product.price).then(res => {
      alert("Added to cart");
    });
  };

  return (
    <div className="p-4 grid grid-cols-3 gap-4">
      {products.map(p => (
        <ProductCard 
          key={p.id} 
          {...p} 
          onAddToCart={handleAdd} 
        />
      ))}
    </div>
  );
}