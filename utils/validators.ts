export interface FormData {
  email: string;
  password: string;
  repeatPassword: string;
}

export const validateFormData = (data: FormData): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const rucRegex = /^\d{11}$/;
  const dniRegex = /^\d{8}$/;
  const phoneRegex = /^9\d{8}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

  if (!emailRegex.test(data.email)) {
    return 'El correo electrónico no es válido.';
  }

  if (!passwordRegex.test(data.password)) {
    return 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos.';
  }

  if (data.password !== data.repeatPassword) {
    return 'Las contraseñas no coinciden.';
  }
  return null; // Todo válido
};


export function validateCompanyForm(data: {
  companyName: string;
  ruc: string;
  managerName: string;
  managerDni: string;
  adminEmail: string;
  companyPhone: string;
  companyAddress: string;
}) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const rucRegex = /^\d{11}$/;
  const dniRegex = /^\d{8}$/;
  const phoneRegex = /^\d{9}$/;

  if (!data.companyName.trim()) return 'El nombre de la empresa es obligatorio.';
  if (!rucRegex.test(data.ruc)) return 'El RUC debe tener exactamente 11 dígitos.';
  if (!data.managerName.trim()) return 'El nombre del encargado es obligatorio.';
  if (!dniRegex.test(data.managerDni)) return 'El DNI debe tener exactamente 8 dígitos.';
  if (!emailRegex.test(data.adminEmail)) return 'El correo del administrador no es válido.';
  if (!phoneRegex.test(data.companyPhone)) return 'El número de la empresa debe tener 9 dígitos.';
  if (!data.companyAddress.trim()) return 'La dirección de la empresa es obligatoria.';

  return null;
}
