import * as React from 'react'

import Song from '../../stores/models/Song'
import { usePlay } from '../PlayProvider'

const BEGINING = 10
const END = 60

const Video = ({ song }: {song: Song}) => {
  const { playing } = usePlay()

  const onPause = (event) => {
    event.currentTarget.load()
  }

  const onTimeUpdate = (event) => {
    if (event.currentTarget.currentTime > END) {
      event.currentTarget.currentTime = BEGINING
    }
  }

  return (
    <video autoPlay loop muted={!playing} onPause={onPause} onTimeUpdate={onTimeUpdate}>
      <source src={`${song.get('video_url')}#t=${BEGINING}`} type="video/mp4" />
    </video>
  )
}

export default Video
