import axios from 'axios'
const baseUrl = 'http://localhost:3000/flashcards'

const getCards = async () => {
  const response = await axios.get(baseUrl)
  // console.log('getcards',response.data)
  return response.data
}

export default { getCards }