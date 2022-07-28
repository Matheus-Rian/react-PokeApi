import styles from './styles.module.scss';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import pokeball from '../../assets/images/poke-ball.png';
import { PokemonsList } from '../../models/PokemonsList.model';
import { useSearchPokemon } from '../../store';
import { usePokemons } from '../../hooks/usePokemons';
import { Button } from '../Button';

export function Card() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [pokemonsFilter, setPokemonsFilter] = useState<PokemonsList[]>([]);
  const result = useSearchPokemon(s => s.search.result);
  const [countPage, setCountPage] = useState(0);

  const { fetchPokemons, pokemonsList } = usePokemons(20);

  useEffect(() => {
    fetchPokemons(countPage);
  }, [countPage]);

  useEffect(() => {
    async function loadPokemons() {
      try {
        setIsLoading(true);
        fetchPokemons(1);
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

      {pokemonsFilter.map(({ name }, index) => (
        <div key={index} className={styles.card}>
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

      <div className={styles.boxButton}>
        {pokemonsFilter.length > 0 && (
          <Button handleClick={() => setCountPage(countPage + 1)}>
            Carregar mais
          </Button>
        )}
      </div>
    </div>
  )
}