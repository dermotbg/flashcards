import axios from 'axios'
const baseUrl = '/api/flashcards'

let token = null

const setToken = (newToken) => {
  token = `Bearer: ${newToken}`
}

const getCards = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default {
  getCards,
  setToken
}