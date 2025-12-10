import { NotePyramid } from './note.model';
import { SeasonRanking, OccasionRanking } from './ranking.model';
import { ProductVariant } from './product-variant.model';

// Tipos para valores específicos
export type Gender = 'men' | 'women' | 'unisex';
export type Longevity = 'Weak' | 'Moderate' | 'Long Lasting' | 'Very Long Lasting';
export type Sillage = 'Intimate' | 'Moderate' | 'Strong' | 'Enormous';
export type AccordStrength = 'Dominant' | 'Prominent' | 'Moderate' | 'Weak';

export interface Product {
  // Identificación
  id: string; // Lo generamos nosotros en el backend

  // Información básica (de la API)
  name: string;
  brand: string;
  year: string;
  country: string;
  gender: Gender;
  rating: number;

  // Precio
  price: number;

  // Imágenes
  imageUrl: string;
  imageFallbacks: string[];
  purchaseUrl?: string;

  // Performance
  longevity: Longevity;
  sillage: Sillage;
  oilType: string; // "Eau de Parfum", "Eau de Toilette", etc.

  // Notas y acordes
  generalNotes: string[];
  mainAccords: string[];
  mainAccordsPercentage: Record<string, AccordStrength>;
  notes: NotePyramid;

  // Rankings
  seasonRanking: SeasonRanking[];
  occasionRanking: OccasionRanking[];

  // Para tu tienda (datos propios, no de la API)
  // Estos los agregas tú en el backend
  stock?: number;
  isActive?: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  // Variants
  variants: ProductVariant[];
}
