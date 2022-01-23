import * as React from 'react'

import AuthService from '../../services/Auth'

export interface AuthContextType {
  userId: () => number | null
  isAuthenticated: () => boolean
  signin: (email: string, password: string) => void
  register: (name: string, email: string, password: string) => void
  signout: (callback: VoidFunction) => void
}

let userId = null
let AuthContext = React.createContext<AuthContextType>(null!)

export const authInitializer = async () => {
  userId = await AuthService.getUserId()
}

export const useAuth = () => React.useContext(AuthContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let getUserId = () => userId
  let isAuthenticated = () => userId !== null

  let signin = async (email: string, password: string) => {
    const result = await AuthService.signin(email, password)

    if (result.status) {
      userId = result.userParams.id
    } else {
      return result.errors
    }
  }

  let register = async (name: string, email: string, password: string): Promise<any> => {
    const result = await AuthService.register(name, email, password)

    if (result.status) {
      userId = result.userParams.id
    } else {
      return result.errors
    }
  }

  let signout = async (): Promise<void> => {
    await AuthService.signout()

    userId = null
  }

  let value = { userId: getUserId, isAuthenticated, signin, register, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
