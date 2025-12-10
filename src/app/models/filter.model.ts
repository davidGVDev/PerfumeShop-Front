import { Gender } from './product.model';

// Filtros para búsqueda de productos
export interface ProductFilters {
  // Texto
  search?: string;

  // Categorización
  gender?: Gender | Gender[];
  brand?: string | string[];
  country?: string | string[];

  // Notas y acordes
  notes?: string[]; // Buscar por cualquier nota
  topNotes?: string[];
  middleNotes?: string[];
  baseNotes?: string[];
  accords?: string[];

  // Temporada y ocasión
  season?: 'spring' | 'summer' | 'fall' | 'winter';
  occasion?: 'professional' | 'casual' | 'night out';

  // Rangos numéricos
  priceMin?: number;
  priceMax?: number;
  yearMin?: number;
  yearMax?: number;
  ratingMin?: number;

  // Paginación
  page?: number;
  limit?: number;

  // Ordenamiento
  sortBy?: 'name' | 'price' | 'rating' | 'year' | 'brand';
  sortOrder?: 'asc' | 'desc';
}

// Respuesta paginada del backend
export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}
