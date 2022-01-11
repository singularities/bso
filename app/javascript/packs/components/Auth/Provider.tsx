import * as React from 'react'

import AuthService from '../../services/Auth'

export interface AuthContextType {
  user: any;
  signin: (user: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

let AuthContext = React.createContext<AuthContextType>(null!);

export const useAuth = () => React.useContext(AuthContext)

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  let [user, setUser] = React.useState<any>(null);

  let signin = (newUser: string, callback: VoidFunction) => {
    return AuthService.signin(() => {
      setUser(newUser)

      callback()
    });
  };

  let signout = (callback: VoidFunction) => {
    return AuthService.signout(() => {
      setUser(null)

      callback()
    });
  };

  let value = { user, signin, signout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
