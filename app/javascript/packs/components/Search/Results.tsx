import * as React from "react"
import { OrderedList, ListItem } from "@chakra-ui/react"

import SearchResult from "../../models/SearchResult"


const Results = ({ results }: { results: Array<SearchResult> }) => {
  console.log(results)
  return (
    <OrderedList>
      {results.map(result => (
        <ListItem key={result.id}>
          {result.title}
        </ListItem>
      ))}
    </OrderedList>
  )
}

export default Results
