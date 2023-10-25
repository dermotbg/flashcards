import axios from 'axios'

const baseUrl = '/api/users'

export const createUser = async (userObj) => {
  const response = await axios.post(baseUrl, userObj)
  return response.data
}