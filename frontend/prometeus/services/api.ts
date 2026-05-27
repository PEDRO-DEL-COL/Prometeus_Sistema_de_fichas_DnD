const API_URL = "http://127.0.0.1:8000"

export async function registerUser(data: {
  username: string
  email: string
  password: string
}) {

  const response = await fetch(`${API_URL}/register`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.detail)
  }

  return result
}