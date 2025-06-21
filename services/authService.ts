import api from './api';

interface RegisterPayload {
  email: string;
  password: string;
  userTypeId: number;
  name: string;
  ruc: string;
  managerName: string;
  managerDni: string;
  managerEmail: string;
  phone: string;
  address: string;
  paymentPasswordHash: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

export const register = async (data: RegisterPayload) => {
  try {
    const response = await api.post('/api/Auth/register', data);
    return response.data;
  } catch (error: any) {
    console.error('❌ Error en registro:', error.response?.data || error.message);
    throw error;
  }
};

export const login = async (data: LoginPayload) => {
  try {
    const response = await api.post('/api/Auth/login', data);
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
