// Una nota individual (Lemon, Bergamot, etc.)
export interface FragranceNote {
  name: string;
  imageUrl: string;
}

// La pirámide de notas completa
export interface NotePyramid {
  top: FragranceNote[];
  middle: FragranceNote[];
  base: FragranceNote[];
}
