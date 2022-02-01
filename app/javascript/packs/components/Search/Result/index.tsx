import * as React from 'react'
import { Flex, Image, ListItem, Text } from '@chakra-ui/react'

import SearchResult from '../../../stores/models/SearchResult'
import Add from './Add'
import Show from './Show'

const Result = ({ result, onAdd }: { result: SearchResult, onAdd: Function }) => {
  const [add, setAdd] = React.useState(false)

  const onClick = () => {
    setAdd(true)
  }

  return (
    <ListItem onClick={onClick}>
      {add ?
        <Add result={result} onAdd={onAdd}/> :
        <Show result={result} />
      }
    </ListItem>
  )
}

export default Result
