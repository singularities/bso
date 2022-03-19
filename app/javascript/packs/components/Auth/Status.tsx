import * as React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaBars } from "react-icons/fa"

import { useAuth } from "./Provider"

const AuthStatus = () => {
  let auth = useAuth()
  let navigate = useNavigate()

  if (!auth.isAuthenticated()) {
    return <Box>You are not logged in.</Box>;
  }

  const logout = async () => {
    await auth.signout()

    navigate("/")
  }

  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<FaBars />}
          colorScheme='blackAlpha'
          variant='ghost'>
        </MenuButton>
        <MenuList>
          <MenuItem>{auth.user().name}</MenuItem>
          <MenuItem onClick={logout}>Salir</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default AuthStatus
