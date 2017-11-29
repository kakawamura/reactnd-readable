const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = { 'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': token
}

export const fetchPosts = () => {
  return fetch(`${api}/posts/`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => error)
}

export const fetchPost = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => error)
}

export const votePost = (id, option) => {
  return fetch(`${api}/posts/${id}`, { 
    headers,
    method: 'POST',
    body: JSON.stringify({
      option: option
    }),
  }).then(res => res.json())
    .then(data => data)
    .catch(error => error)
}

export const fetchPostComments = (id) => {
  return fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => error)
}

export const createComment = (comment) => {
  return fetch(`${api}/comments`, { 
    headers,
    method: 'POST',
    body: JSON.stringify(comment),
  }).then(res => res.json())
    .then(data => data)
    .catch(error => error)
}

export const updateComment = (id, body) => {
  return fetch(`${api}/comments/${id}`, { 
    headers,
    method: 'PUT',
    body: JSON.stringify({
      body: body,
    }),
  }).then(res => res.json())
    .then(data => data)
    .catch(error => error)
}

export const deleteComment = (id) => {
  return fetch(`${api}/comments/${id}`, { 
    headers,
    method: 'DELETE',
  }).then(res => res.json())
    .then(data => data)
    .catch(error => error)
}

export const voteComment = (id, option) => {
  return fetch(`${api}/comments/${id}`, { 
    headers,
    method: 'POST',
    body: JSON.stringify({
      option: option
    }),
  }).then(res => res.json())
    .then(data => data)
    .catch(error => error)
}

export const fetchCategories = () => {
  return fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
    .catch(error => error)
}
