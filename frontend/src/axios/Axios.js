import axios from "axios";

const GET_PRODUCTS = "/api/products";
const GET_PRODUCT = "/api/products";

axios.defaults.baseURL = "http://localhost:8000";

export const getProducts = async () => {
  const response = await axios.get(GET_PRODUCTS);
  return response.data;
};

export const getProduct = async () => {
  const response = await axios.get(GET_PRODUCTS);
  return response.data;
};
