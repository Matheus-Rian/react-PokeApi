import styles from './styles.module.scss';
import { HiOutlineTrash, HiOutlinePencil } from 'react-icons/hi';

export function Card() {
  return (
    <div className={styles.card}>
      <img src="https://avatars.githubusercontent.com/u/53922139?v=4" alt="image profile" />
      <p>Lorem ipsum dolor sit amet consectetur</p>
      <footer>
        <button>
          <HiOutlineTrash />
          Excluir
        </button>
        <button>
          <HiOutlinePencil />
          Editar
        </button>
      </footer>
    </div>
  )
}