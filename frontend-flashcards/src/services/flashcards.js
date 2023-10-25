import axios from 'axios'
const baseUrl = '/api/flashcards'

const getCards = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { getCards }