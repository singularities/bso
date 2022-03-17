import * as React from 'react'
import {
  Image
} from '@chakra-ui/react'
import { observer } from 'mobx-react'

import Song from '../../stores/models/Song'
import blankThumbnail from '../../../images/blank_thumbnail.svg'

const Thumbnail = ({ song }: {song: Song}) => {
  return (
   <Image src={song.get('thumbnail_url')} fallbackSrc={blankThumbnail} />
  )
}

export default observer(Thumbnail)
