import * as React from "react"
import { List, ListItem } from "@chakra-ui/react"

import SearchResult from "../../models/SearchResult"

const Results = ({ results }: { results: Array<SearchResult> }) => {
  return (
    <List>
      {results.map(result => (
        <ListItem key={result.id}>
          {result.title}
        </ListItem>
      ))}
    </List>
  )
}

export default Results
