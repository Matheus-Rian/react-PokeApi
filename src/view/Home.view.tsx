import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { SearchResult } from '../components/SearchResult';

export function Home() {
  return (
    <>
      <Header />
      <Search />
      <SearchResult />
    </>
  );
}