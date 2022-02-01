import * as React from "react"
import {
  List
 } from "@chakra-ui/react"

import SearchResult from "../../stores/models/SearchResult"
import Result from './Result'

const Results = ({ results, onAdd }: { results: Array<SearchResult>, onAdd: Function }) => {
  if (results.length === 0) return null

  return (
    <List mt="2">
      {results.map(result => (
        <Result key={result.id} result={result} onAdd={onAdd} />
      ))}
    </List>
  )
}

export default Results
