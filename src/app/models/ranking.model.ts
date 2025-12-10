export interface SeasonRanking {
  name: 'spring' | 'summer' | 'fall' | 'winter';
  score: number; // El valor numérico (2.353, 1.212, etc.)
}

export interface OccasionRanking {
  name: 'professional' | 'casual' | 'night out';
  score: number;
}
