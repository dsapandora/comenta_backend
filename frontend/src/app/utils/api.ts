// src/utils/api.ts
import axios from 'axios';

export const fetchOrder = async () => {
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
  try {
    const response = await axios.get(`${backendUrl}/order`);
    return response.data;
  } catch (error) {
    console.error('Error fetching order:', error);
    throw error;
  }
};

export const fetchStock = async () => {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    try {
      const response = await axios.get(`${backendUrl}/stock`);
      return response.data;
    } catch (error) {
      console.error('Error fetching stock:', error);
      throw error;
    }
  };