export type AuthResult = {
  status: Boolean,
  userParams?: any,
  errors?: any
}

const AuthService = {
  user: null,

  async getUserId (): Promise<string | null> {
    const response = await fetch('/api/session')

    if (!response.ok) return null

    const body = await response.json()

    return body.id
  },

  async signin (email: string, password: string) {
    const response = await fetch('/api/session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email, password
        }
      })
    })

    const body = await response.json()

    if (response.ok) return { status: true, userParams: body }

    return { status: false, errors: body }
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

  async signout(): Promise<void> {
    const response = await fetch('/api/session', {
      method: 'DELETE'
    })

    if (!response.ok) throw response.body
  }
}

export default AuthService
