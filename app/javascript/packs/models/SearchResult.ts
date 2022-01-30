class SearchResult {
  private _gapiResult: any

  constructor(gapiResult) {
    this._gapiResult = gapiResult
  }

  get gapiResult () { return this._gapiResult }
  get id () { return this.gapiResult.id.videoId }
  get title () { return this.gapiResult.snippet.title }
  get thumbnail () { return this.gapiResult.snippet.thumbnails.default.url }
  get embedUrl () { return `https://www.youtube.com/embed/${this.id}` }
}

export default SearchResult
