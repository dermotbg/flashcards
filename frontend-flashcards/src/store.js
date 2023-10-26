import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './reducers/cardReducer'
import loginReducer from './reducers/loginReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    flashcards: cardReducer,
    login: loginReducer,
    notification: notificationReducer,
  }
})

export default store