import * as React from 'react'
import Song from '../../stores/models/Song'

export type PlayContextType = {
  currentSong: Song | null
  setCurrentSong: (song: Song) => void
  playing: boolean
  setPlaying: (playing: boolean) => void
}

let PlayContext = React.createContext<PlayContextType>(null)

export const usePlay = () => React.useContext(PlayContext)

const PlayProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSong, setCurrentSong] = React.useState<Song | null>(null)
  const [playing, setPlaying] = React.useState<boolean>(false)

  const value = {
    currentSong,
    setCurrentSong,
    playing,
    setPlaying
  }

  return <PlayContext.Provider value={value}>{children}</PlayContext.Provider>
}

export default PlayProvider
