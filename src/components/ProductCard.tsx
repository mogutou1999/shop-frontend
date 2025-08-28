import { addToCart } from "../api/api";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const handleAddToCart = () => {
    addToCart(product.id, 1)
      .then(() => alert("已加入购物车"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="border p-2 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover"/>
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-2 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600"
      >
        加入购物车
      </button>
    </div>
  );
}
