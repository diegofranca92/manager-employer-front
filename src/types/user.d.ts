declare namespace User {
  type LoginFormData = {
      username: string
      password: string
  }

  interface IUser {
    id: number
    name: string
    email: string
    username: string
  }
}