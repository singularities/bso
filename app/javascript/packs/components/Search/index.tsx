import * as React from 'react'
import { Input } from '@chakra-ui/react'
import { SyntheticEvent } from 'react'

const SEARCH_DELAY = 1000

const Search = ({handleChange}) => {
  const input = React.useRef<HTMLInputElement>(null)
  let timeout

  const onChange = async (event: SyntheticEvent): Promise<void> => {
    if (timeout) {
      clearTimeout(timeout)
      timeout = undefined
    }

    timeout = setTimeout(async () => {
      handleChange((event.target as HTMLInputElement).value)
    }, SEARCH_DELAY)
  }

  return (
    <>
      <Input
        ref={input}
        onChange={onChange}
        placeholder='Buscar canción' />
    </>
  )
}

export default Search
