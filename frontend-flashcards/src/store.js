import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './reducers/cardReducer'
import loginReducer from './reducers/loginReducer'

const store = configureStore({
  reducer: {
    flashcards: cardReducer,
    login: loginReducer,
  }
})

export default store