import { pokeApi } from "../api";
import type { Pokemon } from "../interfaces";

export const getPokemonInfo = async (key: string) => {
  try {
    const { data: { id, name, sprites, stats, abilities, moves } } = await pokeApi.get<Pokemon>(`/pokemon/${key}`);

    return {
      id,
      name,
      sprites,
      stats,
      abilities,
      moves
    }
  } catch (e) { 
    return null;
  }
}