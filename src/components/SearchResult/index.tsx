import { Button } from '../Button';
import { Card } from '../Card';
import styles from './styles.module.scss';

export function SearchResult() {
  return (
    <main className={styles.resultContainer}>
      <header>
        <h1>Resultado de busca</h1>
        <Button>Novo Card</Button>
      </header>
      <div>
        <Card />
      </div>
    </main>
  )
}