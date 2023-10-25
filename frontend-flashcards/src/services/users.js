import axios from 'axios'

const baseUrl = 'http://localhost:3000/users'

export const createUser = async (userObj) => {
  const response = await axios.post(baseUrl, userObj)
  return response.data
}