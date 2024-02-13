import { createContext, useContext } from "react";

import { useAuthContextProvider } from "./AuthContextProvider";
import { API_URL } from "../constants";

const TokenizedApiServiceContext = createContext();

export function TokenizedApiServiceContextProvider({ children }){
  const { authToken, logout } = useAuthContextProvider()

  const baseUrl = "http://localhost:3000"
  let headers = {
    'Authorization': `Bearer ${authToken}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  // if( authToken ) headers['Authorization'] = `Bearer ${authToken}`

  const request = (path, payload = {}) => {
    const url = API_URL + path

    return fetch(url, {
      ...payload,
      headers
    })
    .then(response => {
      if(response.status === 401){
        logout()
        throw(response.error)
      }
      else{
        return response
      }
    })
    .then(response => response.json())
  }

  const get = (path) => {
    return request(path)
  }

  const post = (path, payload = {}) => {
    return request(path, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    })
  }

  const put = (path, payload = {}) => {
    return request(path, {
      method: 'PUT',
      headers,
      body: JSON.stringify(payload)
    })
  }

  const destroy = (path) => {
    return request(path, {
      method: 'DELETE',
      headers
    })
  }

  const TokenizedApiServiceContextStore = {
    baseUrl,
    get,
    post,
    put,
    destroy
  }

  return(
    <TokenizedApiServiceContext.Provider value = { TokenizedApiServiceContextStore }>
      { children }
    </TokenizedApiServiceContext.Provider>
  )
}


export function useTokenizedApiServiceContext(){
  return useContext(TokenizedApiServiceContext)
}
