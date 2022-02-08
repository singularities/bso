import * as React from 'react'
import { Input } from '@chakra-ui/react'
import { SyntheticEvent } from 'react'
import { useSearch } from './Provider'

const SEARCH_DELAY = 1000

const Search = () => {
  const input = React.useRef<HTMLInputElement>(null)
  const { query, setQuery } = useSearch()
  // let timeout

  const onChange = async (event: SyntheticEvent): Promise<void> => {
    // if (timeout) {
    //   clearTimeout(timeout)
    //   timeout = undefined
    // }

    // timeout = setTimeout(async () => {
    //   handleChange((event.target as HTMLInputElement).value)
    // }, SEARCH_DELAY)
    setQuery((event.target as HTMLInputElement).value)
  }

  return (
    <>
      <Input
        value={query}
        ref={input}
        onChange={onChange}
        placeholder='Buscar canción' />
    </>
  )
}

export default Search
