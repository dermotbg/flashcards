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
        all: [...state.all],
        selected: action.payload
      }
    },
    clearCards(){
      return {
        all: [],
        selected: []
      }
    },
    resetSelected(state){
      return {
        all: [...state.all],
        selected: []
      }
    },
  }
})

export const { setCards, setSelected, clearCards, resetSelected } = cardSlice.actions

export const getCards = () => {
  return async dispatch => {
    const cards = await flashcardService.getCards()
    dispatch(setCards(cards))
  }
}

export const rateCard = (cardObj, undo) => {
  return async () => {
    if(undo){
      //conditional for removing rating
      cardObj.undo = undo
      await flashcardService.rateCard(cardObj)
      return
    }
    await flashcardService.rateCard(cardObj)
  }
}

export default cardSlice.reducer