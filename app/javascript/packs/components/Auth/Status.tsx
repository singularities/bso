import * as React from "react"
import { useNavigate } from "react-router-dom"
import { Box, Button } from "@chakra-ui/react"

import { useAuth } from "./Provider"

const AuthStatus = () => {
  let auth = useAuth()
  let navigate = useNavigate()

  if (!auth.isAuthenticated()) {
    return <Box>You are not logged in.</Box>;
  }

  return (
    <Box>
      Welcome {auth.user().name}!{" "}
      <Button
        onClick={async () => {
          await auth.signout()

          navigate("/")
        }}
      >
        Sign out
      </Button>
    </Box>
  )
}

export default AuthStatus
