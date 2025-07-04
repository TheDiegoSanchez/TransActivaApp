import api from './api';
import { AxiosError } from 'axios';
export interface RegisterOrderRequestDto {
  producto: string;
  cantidad: number;
  descripcion: string;
  idproveedor: number;
  direccionEntrega: string;
  fechaLlegadaAcordada: string;
  monto: number;
  nombreTransaccion: string;
}

export const registerOrder = async (orderData: RegisterOrderRequestDto) => {
  try {
    const response = await api.post('/api/Buyer/RegistrarPedido', orderData);
    return response.data; // Debería devolver { idpedido: number }
  } catch (err) {
    const error = err as Error | AxiosError; // Hacemos un type assertion inicial

    console.error('Error al registrar el pedido:', error);

    // 2. Verificamos si el error es de Axios y tiene una respuesta del servidor
    if (error instanceof AxiosError && error.response) {
      // Si el backend envió datos (ej: { message: "Error de validación" }), 
      // los lanzamos para que el componente los pueda capturar.
      throw error.response.data;
    }

    // 3. Si es un error genérico (de red, etc.), lanzamos el error original.
    throw error;
  }
};