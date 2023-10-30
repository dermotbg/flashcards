import axios from 'axios'

const baseUrl = '/api/users'

export const createUser = async (userObj) => {
  const response = await axios.post(baseUrl, userObj)
  return response.data
}

export const addScore = async (userObj) => {
  const response = await axios.put(`${baseUrl}/${userObj.id}/score`, userObj)
  return response.data
}

export const getUser = async (userObj) => {
  const response = await axios.get(`${baseUrl}/${userObj.id}`)
  return response.data
}