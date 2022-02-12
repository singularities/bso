import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'red'
      }
    },
    Checkbox: {
      defaultProps: {
        colorScheme: 'red'
      }
    },
    IconButton: {
      defaultProps: {
        colorScheme: 'red'
      }
    },
    Input: {
      defaultProps: {
        colorScheme: 'red',
        focusBorderColor: 'red.100'
      }
    }
  }
})

export default theme
