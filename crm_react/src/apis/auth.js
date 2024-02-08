import { baseUrl, headers } from "./api"

const path = '/auth/login'

const login = (customer) => {
  const url = baseUrl + path

  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  })
  .then(response => response.json())
}

const authApis = {
  login
}

export default authApis

