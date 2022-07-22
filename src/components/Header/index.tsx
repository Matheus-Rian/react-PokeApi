import styles from './styles.module.scss';
import logo from '../../assets/images/logo-teste.svg';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={logo} alt="logo" />
    </header>
  )
}