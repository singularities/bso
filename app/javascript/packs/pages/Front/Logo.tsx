import * as React from 'react'
import {
  chakra,
  keyframes,
  ImageProps,
  forwardRef,
  usePrefersReducedMotion,
} from '@chakra-ui/react'
import logo from '../../assets/images/logo.svg'

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = forwardRef<ImageProps, 'img'>((props, ref) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${spin} 20s linear`

  return <chakra.img src={logo} ref={ref} {...props} />
})

export default Logo
