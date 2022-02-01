import SearchResult from '../stores/models/SearchResult'

const YoutubeSearch = async (query: string): Promise<Array<SearchResult>> => {
  if (query === '' || query === null) return []

  const response = await gapi.client.youtube.search.list({
    "part": [
      "snippet"
    ],
      "q": query,
      "type": "video",
      "videoEmbeddable": "true",
      "regionCode": "ES"
    })

  return response.result.items.map((item: object) => {
    console.dir(item)
    return new SearchResult(item)
  })
}

export default YoutubeSearch
