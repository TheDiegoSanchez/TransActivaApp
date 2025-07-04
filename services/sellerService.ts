import api from './api';

interface Seller {
  id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    ruc: string;
    managerName: string;
    managerDni: string;
    managerEmail: string;
    paymentPasswordHash: string;
}

export const getSellerById = async (id: number): Promise<Seller> => {
  try {
    const response = await api.get(`/api/Seller/${id}`);
    return response.data;
  } catch (error: any) {
    console.error('❌ Error al obtener vendedor:', error.response?.data || error.message);
    throw error;
  }
}; 