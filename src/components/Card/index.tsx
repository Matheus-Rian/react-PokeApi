import styles from './styles.module.scss';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import PokemonsService from '../../services/PokemonsService';
import pokeball from '../../assets/images/poke-ball.png';
import { PokemonsList } from '../../models/PokemonsList.model';
import { useSearchPokemon } from '../../store';

export function Card() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [pokemonsList, setPokemonsList] = useState<PokemonsList[]>();
  const [pokemonsFilter, setPokemonsFilter] = useState<PokemonsList[]>();
  const result = useSearchPokemon(s => s.search.result);

  useEffect(() => {
    async function loadPokemons() {
      try {
        setIsLoading(true);

        const listPokemons = await PokemonsService.listPokemons();
        setPokemonsList(listPokemons.results);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadPokemons();
  }, []);

  useEffect(() => {
    if (!result) {
      setPokemonsFilter(pokemonsList);
      return;
    }

    const pokemonsFilter = pokemonsList?.filter(({ name }) => name.toLowerCase().includes(result));
    setPokemonsFilter(pokemonsFilter);
  }, [result]);

  return (
    <div className={styles.container}>
      {isLoading && (
        <h1>Loading...</h1>
      )}

      {(result && pokemonsFilter?.length === 0) && (
        <h1>Nenhum pokémon foi encontrado</h1>
      )}

      {hasError && (
        <h1>Error</h1>
      )}

      {pokemonsFilter?.map(({ name }) => (
        <div key={name} className={styles.card}>
          <img src={pokeball} alt={`pokeball ${name}`} />
          <p>{name}</p>
          <footer>
            <button type='button' onClick={() => window.alert('Funcionalidade não implementada')}>
              <HiOutlineTrash />
              Excluir
            </button >
            <button type='button' onClick={() => window.alert('Funcionalidade não implementada')}>
              <HiOutlinePencil />
              Editar
            </button>
          </footer>
        </div>
      ))}
    </div>
  )
}