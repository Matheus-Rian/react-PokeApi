import create from 'zustand';

type Search = {
  result: string,
};

interface SearchContext {
  search: Search,
  handleChangeSearch: (value: string) => void,
}

export const useSearchPokemon = create<SearchContext>((set) => ({
  search: {
    result: '',
  },
  handleChangeSearch: (value: string) => {
    set(state => {
      return { 
        ...state,
        search: {
          result: value,
        }
      }
    })
  }
}));