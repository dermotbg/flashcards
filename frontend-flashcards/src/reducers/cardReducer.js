import { createSlice, current } from '@reduxjs/toolkit'
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
    rateCardAction(state, action){
      const id = action.payload.id
      return {
        all: [...state.all],
        selected: state.selected.map(c => c.id === id ? action.payload : c)
      }
    },
    // Disabled card state for match5 game
    setDisabled(state, action){
      const updatedSelected = action.payload.map((c) => {
        const cardUpdated = { ...c, disabled: false } 
        return cardUpdated
      })
      return {
        all: [...state.all],
        selected: updatedSelected
      }
    },
    //Set the active card in Match5 (disabling all others)
    setActive(state, action){
      console.log('paybab',action.payload)
      //takes name from the clicked card and sets all other disableds to true
      const selected = state.selected
      // we can try find the id of the card by it's name too.
      const updatedCards = selected.map((c) => {
        console.log(current(c))
        return c.bg !== action.payload || c.en !== action.payload
          ? { ...c, disabled: true }
          : c
      })
      console.log(updatedCards)
      return {
        all: [...state.all],
        selected: updatedCards
      }
    }
  }
})

export const { setCards, setSelected, clearCards, resetSelected, rateCardAction, setDisabled, setActive } = cardSlice.actions

export const getCards = () => {
  return async dispatch => {
    const cards = await flashcardService.getCards()
    dispatch(setCards(cards))
  }
}

export const rateCard = (cardObj) => {
  return async dispatch => {
    dispatch(rateCardAction(cardObj))
    await flashcardService.rateCard(cardObj)
  }
}

export default cardSlice.reducer