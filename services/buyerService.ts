import api from './api';

interface Buyer {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export const getBuyerById = async (id: number): Promise<Buyer> => {
  try {
    const response = await api.get(`/api/Buyer/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('❌ Error al obtener comprador:', error.response?.data || error.message);
    throw error;
  }
};