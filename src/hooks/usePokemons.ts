import { useState } from 'react';
import { PokemonsList } from '../models/PokemonsList.model';
import PokemonsService from '../services/PokemonsService';

export function usePokemons(limit: number) {
  const [pokemonsList, setPokemonsList] = useState<PokemonsList[]>([]);

  async function fetchPokemons(offset: number) {
    const response = await PokemonsService.listPokemons(offset, limit);
    setPokemonsList(prevState => [...prevState ,...response.results]);
  }

  return {
    fetchPokemons,
    pokemonsList,
  };
}