import { UserAddress } from './user.model';

// El "provider" es QUIÉN procesa el pago
export type PaymentProvider = 'stripe' | 'paypal';

// El "method" es CÓMO paga el usuario (informativo)
export type PaymentMethod = 'card' | 'paypal' | 'bank_transfer';

// Estados posibles de una orden
export type OrderStatus =
  | 'pending' // Creada, esperando pago
  | 'paid' // Pagada
  | 'processing' // En preparación
  | 'shipped' // Enviada
  | 'delivered' // Entregada
  | 'cancelled'; // Cancelada

// Un item de la orden (precio congelado)
export interface OrderItem {
  productId: string;
  productName: string; // Guardamos el nombre por si el producto cambia
  productBrand: string;
  productImage: string;
  variantId: string;
  variantSize: number; // ml
  priceAtPurchase: number; // ⚠️ Precio AL MOMENTO de comprar
  quantity: number;
}

// La orden completa
export interface Order {
  id: string;
  userId: string;

  // Items comprados
  items: OrderItem[];

  // Totales (congelados al momento de compra)
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;

  // Dirección de envío (copia, no referencia)
  shippingAddress: UserAddress;

  // Pago
  paymentProvider: PaymentProvider;  // stripe, paypal
  paymentMethod: PaymentMethod;       // card, paypal, etc.
  paymentId?: string;                 // ID de transacción

  // Estado y tracking
  status: OrderStatus;
  trackingNumber?: string; // Número de guía de envío

  // Fechas
  createdAt: Date;
  updatedAt: Date;
  paidAt?: Date;
  shippedAt?: Date;
  deliveredAt?: Date;
}

// Para crear una orden desde el checkout
export interface CreateOrderDto {
  items: {
    productId: string;
    variantId: string;
    quantity: number;
  }[];
  shippingAddress: UserAddress;
  paymentProvider: PaymentProvider;
  paymentMethod: PaymentMethod;
}
