import * as React from 'react'
import { IconButton, Portal } from '@chakra-ui/react'
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa'

const Mute = () => {
  const [playing, setPlaying] = React.useState(false)

  return (
    <Portal>
      <IconButton
        aria-label={ playing ? 'Silenciar' : 'Reproducir' }
        icon={ playing ? <FaVolumeUp /> : <FaVolumeMute />}
        onClick={() => setPlaying(!playing)}
        borderRadius='100%'
        colorScheme='gray'
        position='fixed'
        right='5'
        bottom='5'
      />
    </Portal>
  )
}

export default Mute
