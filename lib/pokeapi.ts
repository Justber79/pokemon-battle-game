// lib/pokeapi.ts
import { Pokemon } from "../types/pokemon";

const BASE_URL = "https://pokeapi.co";

/**
 * FEATURE: Fetch a list of Pokemon (FR015)
 * Used by: Home Page
 */
export async function getPokemonList(limit: number = 20, offset: number = 0) {
  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
  if (!response.ok) throw new Error("Failed to fetch Pokemon list");
  return response.json();
}

/**
 * FEATURE: Fetch detailed data for a specific Pokemon (FR016)
 * Used by: Details Page, Battle Page, and PokemonCard
 */
export async function getPokemonDetails(idOrName: string | number): Promise<Pokemon> {
  const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`);
  if (!response.ok) throw new Error(`Failed to fetch details for ${idOrName}`);
  return response.json();
}
