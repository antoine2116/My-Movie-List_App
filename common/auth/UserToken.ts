import Cookies from "js-cookie"

export const setUserToken = (token: string) => {
  Cookies.set(
    "user_token",
     token, 
     {
      expires: 7
     }
  )
}

export const getUserToken = () => {
  return Cookies.get("user_token")
}

export const removeUserToken = () => {
  Cookies.remove("user_token")
}
