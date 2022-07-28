import { useState } from 'react';
import { PokemonsList } from '../models/PokemonsList.model';
import PokemonsService from '../services/PokemonsService';

export function usePokemons(limit: number) {
  const [pokemonsList, setPokemonsList] = useState<PokemonsList[]>([]);

  async function fetchPokemons(offset: number) {
    const virtualOffset = ((offset - 1) * limit) <= 0
      ? 0
      : ((offset - 1) * limit)

    const response = await PokemonsService.listPokemons(virtualOffset, limit);
    setPokemonsList(response.results);
  }

  return {
    fetchPokemons,
    pokemonsList,
  };
}