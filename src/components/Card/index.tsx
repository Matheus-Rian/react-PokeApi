import styles from './styles.module.scss';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import PokemonsService from '../../services/PokemonsService';
import pokeball from '../../assets/images/poke-ball.png';
import { PokemonsList } from '../../models/PokemonsList.model';

export function Card() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [pokemonsList, setPokemonsList] = useState<PokemonsList>();

  useEffect(() => {
    async function loadPokemons() {
      try {
        setIsLoading(true);
  
        const listPokemons = await PokemonsService.listPokemons();
        setPokemonsList(listPokemons);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadPokemons();
  }, []);

  return (
    <div className={styles.container}>
      {isLoading && (
        <h1>Loading...</h1>
      )}
  
      {hasError && (
        <h1>Error</h1>
      )}

      {pokemonsList?.results.map((result) => (
        <div key={result.name} className={styles.card}>
          <img src={pokeball} alt={`pokeball ${result.name}`} />
          <p>{ result.name }</p>
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