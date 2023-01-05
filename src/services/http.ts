const getHeaders = () => {
  return {}
}

export const httpGet = async (endpoint: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${endpoint}`, {
    headers: getHeaders()
  })
  return res.json()
}

export const httpPost = async (endpoint: string, body: any) => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${endpoint}`, {
    body,
    method: 'POST',
    headers: getHeaders()
  })
  return res.json()
}

export const httpPut = async (endpoint: string, body: any) => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${endpoint}`, {
    body,
    method: 'PUT',
    headers: getHeaders()
  })
  return res.json()
}

export const httpDelete = async (endpoint: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/${endpoint}`, {
    method: 'DELETE',
    headers: getHeaders()
  })
  return res.json()
}
