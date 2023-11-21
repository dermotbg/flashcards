import { createSlice } from '@reduxjs/toolkit'
import functions from '../utilities/functions'

const match5Slice = createSlice({
  name: 'match5',
  initialState: {
    en: [],
    bg: [],
    matched: [],
  },
  reducers: {
    set5(state, action){
      // add disabled attribute to all cards
      const updatedSelected = action.payload.map((c) => {
        const cardUpdated = { ...c, disabled: false }
        return cardUpdated
      })
      return{
        en: updatedSelected,
        bg: functions.shuffle(updatedSelected),
        matched: state.matched
      }
    },
    //Set the active card in Match5 (disabling all others)
    setActive(state, action){
      // check which side was clicked by looking for cyrillic
      const cyrillicPattern = /^[\u0400-\u04FF]+$/
      if (cyrillicPattern.test(action.payload)){
        const allBg = state.bg
        //takes name from the clicked card and sets all other disableds to true
        const updatedCards = allBg.map((c) => {
          return c.bg !== action.payload
            ? { ...c, disabled: true }
            : c
        })
        console.log(updatedCards)
        // eventually will do the same for en
        return {
          en: state.en,
          bg: updatedCards,
          matched: state.matched
        }
      }
    },
    resetActive(state, action){
      // this can be refactored but for now it breaks when it's touched.
      // checks each card to see if it has already been matched
      return{
        // en: state.en.map(c => c.en === action.payload.en ? c : { ...c, disabled: false }),
        en: state.en.map(c => {
          const alreadyMatched = state.matched.find(obj => obj.id === c.id)
          if (c.en === action.payload.en || alreadyMatched) {
            return { ...c, disabled:true }
          }
          return { ...c, disabled: false } }),

        // bg: state.bg.map(c => c.bg === action.payload.bg ? c : { ...c, disabled: false }),
        bg: state.bg.map(c => {
          const alreadyMatched = state.matched.find(obj => obj.id === c.id)
          if (c.bg === action.payload.bg || alreadyMatched){
            return { ...c, disabled:true }
          }
          return { ...c, disabled: false }}),
        matched: state.matched
      }
    },
    setDisabled(state, action){
      //to disable already completed matches
      const enToUpdate = state.en.find((c) => c.id === action.payload.id)
      const bgToUpdate = state.bg.find((c) => c.id === action.payload.id)
      const updatedEn = { ...enToUpdate, disabled: true }
      const updatedBg = { ...bgToUpdate, disabled: true }
      return{
        en: state.en.map(c => c.id === updatedEn.id ? updatedEn : c),
        bg: state.bg.map(c => c.id === updatedBg.id ? updatedBg : c),
        matched: state.matched
      }
    },
    addToMatched(state, action){
      const cardToBeAdded = state.en.find(c => c.id === action.payload.id)
      const matched = state.matched.concat(cardToBeAdded)
      return{
        en: state.en,
        bg: state.bg,
        matched: matched
      }
    }
  }
})

export const { set5, setActive, resetActive, setDisabled, addToMatched } = match5Slice.actions

export default match5Slice.reducer