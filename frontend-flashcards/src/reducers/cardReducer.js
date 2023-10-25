import { createSlice } from '@reduxjs/toolkit'
import flashcardService from '../services/flashcards'

const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    all: [],
    selected: []
  },
  reducers: {
    setCards(state, action){
      return {
        all: action.payload,
        selected: [...state.selected]
      }
    },
    setSelected(state, action) {
      return {
        all: [state.all],
        selected: action.payload
      }
    },
    clearCards(){
      return {
        all: [],
        selected: []
      }
    }
  }
})

export const { setCards, setSelected, clearCards } = cardSlice.actions

export const getCards = () => {
  return async dispatch => {
    const cards = await flashcardService.getCards()
    dispatch(setCards(cards))
  }
}

export default cardSlice.reducer