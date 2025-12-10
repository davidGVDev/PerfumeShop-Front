import { Product } from './product.model';
import { ProductVariant } from './product-variant.model';

// Un item individual en el carrito
export interface CartItem {
  product: Product; // El perfume
  variant: ProductVariant; // El decant seleccionado (5ml, 10ml, etc.)
  quantity: number; // Cantidad
}

// El carrito completo
export interface Cart {
  items: CartItem[];

  // Estos se calculan en el frontend/servicio
  // No se guardan, se derivan de los items
}

// Para calcular totales (helper type)
export interface CartSummary {
  subtotal: number; // Suma de (price * quantity)
  shipping: number; // Costo de envío
  tax: number; // Impuestos (si aplica)
  total: number; // subtotal + shipping + tax
  itemCount: number; // Total de items
}
