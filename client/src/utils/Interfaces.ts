export interface ILoginForm {
  username: string
  password: string
}

export interface IRegistrationFrom {
  fname: string
  mname: string
  lname: string
  position: string
  sectionId: string | number
  username: string
  password: string
  confirmPassword: string
  status?: 'A' | 'I'
}
