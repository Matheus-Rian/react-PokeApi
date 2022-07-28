import { ResponsePokemonsList } from '../models/PokemonsList.model';
import { HttpClient } from './utils/HttpClient';

class PokemonsService {
  constructor(
    private httpClient = new HttpClient('https://pokeapi.co/api/v2/'),
  ) { }

  async listPokemons(offset: number, pageLimit: number): Promise<ResponsePokemonsList> {
    return this.httpClient.get('pokemon', { params: { offset, pageLimit }});
  }
}

export default new PokemonsService();