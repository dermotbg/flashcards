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
    rateCardAction(state, action){
      const id = action.payload.id
      const cardToBeUpdated = state.selected.find(c => c.id === id)
      const changedCard =  action.payload.undo
        ? { ...cardToBeUpdated, rating: cardToBeUpdated -1 }
        : { ...cardToBeUpdated, rating: cardToBeUpdated.rating +1 }
      console.log(cardToBeUpdated.rating)
      return {
        all: state.all,
        selected: state.selected.map(c => c.id === changedCard.id ? changedCard : c)
      }
    }
  }
})

export const { setCards, setSelected, clearCards, resetSelected, rateCardAction } = cardSlice.actions

export const getCards = () => {
  return async dispatch => {
    const cards = await flashcardService.getCards()
    dispatch(setCards(cards))
  }
}

export const rateCard = (cardObj, undo) => {
  return async dispatch => {
    if(undo){
      //conditional for removing rating
      console.log('undo active')
      cardObj.undo = undo
      await flashcardService.rateCard(cardObj)
      dispatch(rateCardAction(cardObj))
      return
    }
    dispatch(rateCardAction(cardObj))
    await flashcardService.rateCard(cardObj)
  }
}

export default cardSlice.reducer