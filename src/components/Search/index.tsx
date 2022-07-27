import styles from './styles.module.scss';
import { HiOutlineSearch } from 'react-icons/hi';
import { useSearchPokemon } from '../../store';

export function Search() {
  const handleChangeSearch = useSearchPokemon(s => s.handleChangeSearch);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.boxSearch}>
        <input 
          type='text' 
          placeholder='Digite aqui a sua busca...' 
          onChange={(ev) => handleChangeSearch(ev.target.value)} 
        />
        <button type='button'>
          <HiOutlineSearch />
        </button>
      </div>
    </div>
  )
}