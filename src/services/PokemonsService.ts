import { ResponsePokemonsList } from '../models/PokemonsList.model';
import { HttpClient } from './utils/HttpClient';

class PokemonsService {
  constructor(
    private httpClient = new HttpClient('https://pokeapi.co/api/v2/'),
  ) { }

  async listPokemons(): Promise<ResponsePokemonsList> {
    return this.httpClient.get('pokemon');
  }
}

export default new PokemonsService();