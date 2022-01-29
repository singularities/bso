import * as React from 'react'
import { Flex, Image, ListItem, Text } from '@chakra-ui/react'

import SearchResult from '../../../models/SearchResult'

const Result = ({ result }: { result: SearchResult }) => {
  return (
    <ListItem>
      <Flex mb="2">
        <Image src={result.thumbnail} />
        <Text ml="2">{result.title}</Text>
      </Flex>
    </ListItem>
  )
}

export default Result
