import { createSlice } from '@reduxjs/toolkit'


const HangmanSlice = createSlice({
  name: 'hangman',
  initialState: {
    card: {},
    guessed: []
  },
  reducers: {
    setHangmanWord(state, action){
      return{
        card: action.payload,
        guessed: state.guessed
      }
    }
  }
})

export const { setHangmanWord } = HangmanSlice.actions

export default HangmanSlice.reducer