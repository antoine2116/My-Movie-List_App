import { AuthResponse } from "../../models/AuthResponse"
import { RestAPIClient } from "../clients/RestAPIClient"

export const APIQueries = {
  register: (
    email: string,
    password: string,
    passwordConfirmation: string
  ) => {
    return RestAPIClient.post<AuthResponse>("/auth/register", {
      user:  {
        email,
        password,
        passwordConfirmation: passwordConfirmation,
      }
    })
  },

  login: (
    email: string,
    password: string
  ) => {
    return RestAPIClient.post<AuthResponse>("/auth/login", {
      user:  {
        email,
        password
      }
    })
  }
}