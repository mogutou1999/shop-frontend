import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 从环境变量读取后端地址
  timeout: 5000,
});

// 示例：获取商品列表
export const getProducts = async () => {
  const response = await api.get("/products"); 
  return response.data;
};

// 示例：添加到购物车
export const addToCart = async (productId: string, quantity: number) => {
  const response = await api.post("/cart/add", { productId, quantity });
  return response.data;
};

// 示例：获取购物车
export const getCart = async () => {
  const response = await api.get("/cart");
  return response.data;
};

// 示例：结算
export const checkout = async (cartId: string) => {
  const response = await api.post("/cart/checkout", { cartId });
  return response.data;
};
