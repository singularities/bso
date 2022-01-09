class SearchResult {
  private _gapiResult: any;object
  get gapiResult () { return this._gapiResult }
  get id () { return this.gapiResult.id.videoId }
  get title () { return this.gapiResult.snippet.title }
  get thumbnail () { return this.gapiResult.snippet.thumbnails.default.url }

  constructor(gapiResult) {
    this._gapiResult = gapiResult;
  }
}

export default SearchResult
