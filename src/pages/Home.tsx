import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import ProductCard from "../components/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}
export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data)).catch(console.error);
  }, []);


 return (
    <div>
      <h1>商品列表</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>{p.name} - {p.price}</li>
        ))}
      </ul>
    </div>
  );
}
