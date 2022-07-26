import styles from './styles.module.scss';
import logo from '../../assets/images/logo-impar.svg';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="logo Impar" />
    </header>
  )
}