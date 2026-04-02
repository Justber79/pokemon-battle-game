export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  type: string; // 'fire', 'water', 'electric', etc.
}

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  stats: PokemonStats;
}
