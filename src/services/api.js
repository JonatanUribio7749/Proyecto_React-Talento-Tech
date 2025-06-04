// src/services/api.js
import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

// Obtener todos los productos
export const fetchProductos = async () => {
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data; // array de productos
};

// Obtener un producto por su ID
export const fetchProductoPorId = async (id) => {
  const response = await axios.get(`${BASE_URL}/products/${id}`);
  return response.data; // objeto { id, title, price, ... }
};
