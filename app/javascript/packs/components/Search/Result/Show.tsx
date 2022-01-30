import * as React from 'react'
import { Flex, Image, Text } from '@chakra-ui/react'

import SearchResult from '../../../models/SearchResult'

const Show = ({result}: {result: SearchResult}) => {
  return (
    <Flex mb="2">
      <Image src={result.thumbnail} />
      <Text ml="2">{result.title}</Text>
    </Flex>
  )
}

export default Show
