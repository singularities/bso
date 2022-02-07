import * as React from 'react'
import { Center, Input, Spinner } from '@chakra-ui/react'

import YoutubeSearch from '../../../services/YoutubeSearch'
import Results from './Results'
import { useSearch } from '../Search/Provider'

const SEARCH_DELAY = 1000

const Body = ({inputRef, onAdd}: {
  inputRef: React.MutableRefObject<HTMLInputElement>,
  onAdd: Function
}) => {
  const [loading, setLoading] = React.useState(false)
  const [searchResults, setSearchResults] = React.useState([])
  const { query } = useSearch()
  let timeout

  const search = async () => {
    setLoading(true)
    const value = inputRef.current.value

    if (value.length === 0) {
      setSearchResults([])
      setLoading(false)
      return
    }

    const results = await YoutubeSearch(value)

    setSearchResults(results)
    setLoading(false)
  }

  React.useEffect(() => {
    search()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChange = async (event: React.SyntheticEvent): Promise<void> => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = undefined
    }

    timeout = setTimeout(search, SEARCH_DELAY)
  }

  return (
    <>
      <Input
        defaultValue={query}
        ref={inputRef}
        onChange={onChange}
        placeholder='Buscar canción' />
        { loading ?
          <Center mt='5'><Spinner /></Center> :
          <Results results={searchResults} onAdd={onAdd} />
        }
    </>
  )
}

export default Body
