import { Product } from './product.model';

export type VariantType = 'decant' | 'full_bottle';

export interface ProductVariant {
  id: string;
  productId: string; // Referencia al perfume
  type: VariantType; // decant, full_bottle
  size: number; // Tamaño en ml (5, 10, 30, etc.)
  price: number; // Precio de esta variante
  stock: number; // Stock disponible
  sku?: string; // Código único de inventario
}

// Para mostrar en el frontend
export interface ProductWithVariants {
  product: Product;
  variants: ProductVariant[];
}
