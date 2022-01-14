export default class User {
  id: string
  name: string
  email: string

  constructor(params: any) {
    this.id = params.id
    this.name = params.name
    this.email = params.email
  }
}
