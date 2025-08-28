import axios from "axios";

const API_BASE = "https://your-backend-domain.com"; // 后端 FastAPI 地址

export async function getProducts() {
  const res = await axios.get(`${API_BASE}/products`);
  return res.data;
}

export async function addToCart(user_id: string, product_id: number, quantity: number, product_name: string, unit_price: number) {
  const res = await axios.post(`${API_BASE}/cart/add`, { user_id, product_id, quantity, product_name, unit_price });
  return res.data;
}

export async function getOrders(user_id: number) {
  const res = await axios.get(`${API_BASE}/orders/${user_id}`);
  return res.data;
}