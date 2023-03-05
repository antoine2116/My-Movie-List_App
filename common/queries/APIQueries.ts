import { User } from "../../models/User"
import { getUserToken } from "../auth/UserToken"
import { RestAPIClient } from "../clients/RestAPIClient"

export const APIQueries = {
  register: (
    email: string,
    password: string,
    passwordConfirmation: string
  ) => {
    return RestAPIClient.post<User>("/auth/register", {
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
    return RestAPIClient.post<User>("/auth/login", {
      user:  {
        email,
        password
      }
    })
  },

  profile: () => {
    return RestAPIClient.get<User>("/api/profile");
  }
}