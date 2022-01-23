import * as React from 'react'

import AuthService from '../../services/Auth'

export interface AuthContextType {
  user: () => any
  isAuthenticated: () => boolean
  signin: (email: string, password: string) => void
  register: (name: string, email: string, password: string) => void
  signout: (callback: VoidFunction) => void
}

let user = null
let AuthContext = React.createContext<AuthContextType>(null!)

export const authInitializer = async () => {
  user = await AuthService.getUser()
}

export const useAuth = () => React.useContext(AuthContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let getUser = () => user
  let isAuthenticated = () => user !== null

  let signin = async (email: string, password: string) => {
    const result = await AuthService.signin(email, password)

    if (result.status) {
      user = result.userParams
    } else {
      return result.errors
    }
  }

  let register = async (name: string, email: string, password: string): Promise<any> => {
    const result = await AuthService.register(name, email, password)

    if (result.status) {
      user = result.userParams
    } else {
      return result.errors
    }
  }

  let signout = async (): Promise<void> => {
    await AuthService.signout()

    user = null
  }

  let value = { user: getUser, isAuthenticated, signin, register, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
