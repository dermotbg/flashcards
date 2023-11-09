import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './reducers/cardReducer'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'
import avatarReducer from './reducers/avatarReducer'

const store = configureStore({
  reducer: {
    flashcards: cardReducer,
    user: userReducer,
    notification: notificationReducer,
    avatar: avatarReducer,
  }
})

export default store