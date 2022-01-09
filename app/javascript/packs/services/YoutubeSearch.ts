import SearchResult from '../models/SearchResult'

const YoutubeSearch = async (query: string): Promise<Array<SearchResult>> => {
  const response = await gapi.client.youtube.search.list({
    "part": [
      "snippet"
    ],
      "q": query
    })

    console.log("Response", response)

  return response.result.items.map((item: object) => {
    return new SearchResult(item)
  })
}

export default YoutubeSearch
