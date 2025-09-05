import React, { useState } from "react";
import { addToCart } from "../api/api";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  stock: number;      // 库存
  discountPrice?: number; // 可选折扣价
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity < 1) {
      alert("购买数量必须大于0");
      return;
    }
    if (quantity > product.stock) {
      alert("购买数量不能超过库存");
      return;
    }

    addToCart(product.id, quantity)
      .then(() => alert("已加入购物车"))
      .catch((err) => {
        console.error(err);
        alert("加入购物车失败");
      });
  };

  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-bold mt-2">{product.name}</h3>

      {/* 价格显示 */}
      {product.discountPrice ? (
        <p className="text-red-600">
          <span className="line-through mr-2">${product.price.toFixed(2)}</span>
          <span>${product.discountPrice.toFixed(2)}</span>
        </p>
      ) : (
        <p>${product.price.toFixed(2)}</p>
      )}

      {/* 库存显示 */}
      <p className="text-sm text-gray-500">库存：{product.stock}</p>

      {/* 数量输入 */}
      <div className="mt-2">
        <label htmlFor={`qty-${product.id}`} className="mr-2">
          数量：
        </label>
        <input
          id={`qty-${product.id}`}
          type="number"
          min={1}
          max={product.stock}
          value={quantity}
          onChange={(e) =>
            setQuantity(Math.min(product.stock, Math.max(1, Number(e.target.value))))
          }
          className="w-16 border rounded px-2 py-1"
        />
      </div>

      {/* 添加按钮 */}
      <button
        onClick={handleAddToCart}
        className="mt-3 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        加入购物车
      </button>
    </div>
  );
}
