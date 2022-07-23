import styles from './styles.module.scss';
import { HiOutlineSearch } from 'react-icons/hi';

export function Search() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.boxSearch}>
        <input type='text' placeholder='Digite aqui a sua busca...' />
        <button type='button'>
          <HiOutlineSearch />
        </button>
      </div>
    </div>
  )
}