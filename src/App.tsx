import { Header } from './components/Header';
import { Search } from './components/Search';
import { SearchResult } from './components/SearchResult';
import './styles/global.scss';

export function App() {
  return (
    <>
      <Header />
      <Search />
      <SearchResult />
    </>
  )
}
