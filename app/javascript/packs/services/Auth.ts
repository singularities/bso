export type AuthResult = {
  status: Boolean,
  userParams?: any,
  errors?: any
}

const AuthService = {
  user: null,

  signin(email: string, password: string, callback: Function) {
    setTimeout(callback, 100) // fake async
  },

  async register(name: string, email: string, password: string): Promise<AuthResult> {
    const response = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          name,
          email,
          password
        }
      })
     })

    const body = await response.json()

    if (response.ok) return { status: true, userParams: body }

    return { status: false, errors: body }
  },

  signout(callback: VoidFunction) {
    setTimeout(callback, 100)
  }
};

export default AuthService
