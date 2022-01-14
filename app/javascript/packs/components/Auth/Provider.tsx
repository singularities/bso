import * as React from 'react'

import AuthService from '../../services/Auth'

export interface AuthContextType {
  userId: () => number | null
  isAuthenticated: () => boolean
  signin: (email: string, password: string, callback: VoidFunction) => void
  register: (name: string, email: string, password: string) => void
  signout: (callback: VoidFunction) => void
}

let userId = null
let AuthContext = React.createContext<AuthContextType>(null!)

export const useAuth = () => React.useContext(AuthContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let getUserId = () => userId
  let isAuthenticated = () => userId !== null

  let signin = (email: string, password: string, callback: Function) => {
    return AuthService.signin(email, password, () => {
      callback()
    })
  }

  let register = async (name: string, email: string, password: string): Promise<any> => {
    const result = await AuthService.register(name, email, password)

    if (result.status) {
      userId = result.userParams.id
    } else {
      return result.errors
    }
  }

  let signout = (callback: VoidFunction) => {
    return AuthService.signout(() => {
      userId = null

      callback()
    })
  }

  let value = { userId: getUserId, isAuthenticated, signin, register, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
