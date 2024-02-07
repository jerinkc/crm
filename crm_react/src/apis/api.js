const baseUrl = "http://localhost:3000"

const headers = {
  'Authorization': `Bearer `,
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function get(path){
  const url = baseUrl + path

  return fetch(url, { headers })
    .then(response => response.json())
}

function post({ path, payload = {} }){
  const url = baseUrl + path

  return fetch(url, {
    method: 'POST',
    headers,
    body: payload
  })
}

export const api = {
  get,
  post
}
