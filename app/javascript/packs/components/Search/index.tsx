import * as React from 'react'
import { Input } from '@chakra-ui/react'
import { SyntheticEvent } from 'react'

import YoutubeSearch from '../../services/YoutubeSearch'

import Results from './Results'

const SEARCH_DELAY = 1000

const Search = () => {
  const [searchResults, setSearchResults] = React.useState([])
  const input = React.useRef<HTMLInputElement>(null)
  let timeout

  const handleChange = async (event: SyntheticEvent): Promise<void> => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = undefined
    }

    timeout = setTimeout(async () => {
      const results = await YoutubeSearch(event.target.value)

      setSearchResults(results)
    }, SEARCH_DELAY)
  }

  const onAdd = () => {
    setSearchResults([])
    input.current.value = ''
  }

  return (
    <>
      <Input
        ref={input}
        onChange={handleChange}
        placeholder='Buscar canción' />
      <Results results={searchResults} onAdd={onAdd}/>
    </>
  )
}

export default Search
