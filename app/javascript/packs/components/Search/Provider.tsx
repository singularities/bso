import * as React from 'react'

export interface SearchContextType {
  query: string
  setQuery: (query: string) => void
}

let SearchContext = React.createContext<SearchContextType>(null!)

export const useSearch = () => React.useContext(SearchContext)

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  let [query, setQuery] = React.useState('')

  let value = { query, setQuery }

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export default SearchProvider
