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

function post(path, payload = {}){
  const url = baseUrl + path

  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
}

function put(path, payload = {}){
  const url = baseUrl + path

  return fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(payload)
  })
  .then(response => response.json())
}

export const api = {
  get,
  post,
  put
}
