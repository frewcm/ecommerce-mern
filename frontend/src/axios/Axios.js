import axios from "axios";

const GET_PRODUCTS = "/api/products";

axios.defaults.baseURL = "http://localhost:5000";

export const getProducts = async () => {
  const response = await axios.get(GET_PRODUCTS);
  return response.data;
};
