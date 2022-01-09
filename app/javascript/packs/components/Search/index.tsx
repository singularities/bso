import * as React from 'react'
import { Input } from '@chakra-ui/react'
import { SyntheticEvent } from 'react'

import YoutubeSearch from '../../services/YoutubeSearch'

import Results from './Results'
import SearchResult from '../../models/SearchResult'

const Search = () => {
  const [searchResults, setSearchResults] = React.useState([])

  const handleChange = async (event: SyntheticEvent): Promise<void> => {
    const results = await YoutubeSearch(event.target.value)

    setSearchResults(results)
  }

  return (
    <>
      <Input
        onChange={handleChange}
        placeholder='Buscar canción' />
      <Results results={searchResults} />
    </>
  )
}

export default Search
