export interface User {
  id: string;
  email: string;
  fullName: string;
  avatar?: string;

  // Autenticación
  provider: 'local' | 'google'; // Para Google Sign-In

  // Dirección (para envíos)
  address?: UserAddress;

  // Metadatos
  createdAt: Date;
  updatedAt: Date;
}

export interface UserAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone?: string;
}

// Para el login (no envías todo el User)
export interface LoginCredentials {
  email: string;
  password: string;
}

// Para el registro
export interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  country: string;
}
