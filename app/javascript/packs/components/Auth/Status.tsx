import * as React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { FaChevronDown } from "react-icons/fa"

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
          rightIcon={<FaChevronDown />}
          colorScheme='blackAlpha'
          variant='ghost'>
          {auth.user().name}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={logout}>Salir</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default AuthStatus
