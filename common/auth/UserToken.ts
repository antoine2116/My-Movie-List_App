import Cookies from "js-cookie"

export const setUserToken = (token: string) => {
  Cookies.set(
    "token",
     token, 
     {
      expires: 7
     }
  )
}

export const getUserToken = () => {
  return Cookies.get("token")
}

export const removeUserToken = () => {
  Cookies.remove("token")
}
