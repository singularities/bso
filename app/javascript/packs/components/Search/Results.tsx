import * as React from "react"
import {
  Flex,
  Image,
  List,
  ListItem,
  Text
 } from "@chakra-ui/react"

import SearchResult from "../../models/SearchResult"

const Results = ({ results }: { results: Array<SearchResult> }) => {
  if (results.length === 0) return null

  return (
    <List mt="2">
      {results.map(result => (
        <ListItem key={result.id}>
          <Flex mb="2">
            <Image src={result.thumbnail} />
            <Text ml="2">{result.title}</Text>
          </Flex>
        </ListItem>
      ))}
    </List>
  )
}

export default Results
