export const baseUrl = "http://localhost:3000"

var appToken |= localStorage.getItem('appToken')

const headers = {
  'Authorization': `Bearer ${localStorage.getItem('appToken')}`,
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

function get(path){
  const url = baseUrl + path

  return fetch(url, { headers })
    .then(response => ensureTokenValidity(response))
    .then(response => response.json())
}

function post(path, payload = {}){
  const url = baseUrl + path

  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  })
  .then(response => ensureTokenValidity(response))
  .then(response => response.json())
}

function put(path, payload = {}){
  const url = baseUrl + path

  return fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(payload)
  })
  .then(response => ensureTokenValidity(response))
  .then(response => response.json())
}

function destroy(path){
  const url = baseUrl + path

  return fetch(url, {
    method: 'DELETE',
    headers
  }).then(response => ensureTokenValidity(response))
    .then(response => response.json())
}

export const api = {
  get,
  post,
  put,
  destroy
}


function ensureTokenValidity(response){
  if( response.status !== 401) return response

  localStorage.removeItem('appToken')
  localStorage.setItem('exitUrl', window.location.href)
  window.location.href = '/login'
}
