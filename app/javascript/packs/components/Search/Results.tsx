import * as React from "react"
import {
  List
 } from "@chakra-ui/react"

import SearchResult from "../../models/SearchResult"
import Result from './Result'

const Results = ({ results }: { results: Array<SearchResult> }) => {
  if (results.length === 0) return null

  return (
    <List mt="2">
      {results.map(result => (
        <Result key={result.id} result={result} />
      ))}
    </List>
  )
}

export default Results
