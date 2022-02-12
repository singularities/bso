import * as React from 'react'
import {
  ChakraProvider
} from "@chakra-ui/react"

import './adapter'
import theme from './theme'

import AuthProvider, { authInitializer } from './components/Auth/Provider'
import Routes from './components/Routes'
import Loading from './components/Loading'

export const App = () => {
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    const load = async () => {
      await authInitializer()

      setLoaded(true)
    }

    load()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      {loaded ? (
        <AuthProvider>
          <Routes />
        </AuthProvider>
      ) : (
        <Loading />
      )}

    </ChakraProvider>
  )
}
