import { configureStore } from '@reduxjs/toolkit'
import cardReducer from './reducers/cardReducer'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'
import avatarReducer from './reducers/avatarReducer'
import match5Reducer from './reducers/match5Reducer'

const store = configureStore({
  reducer: {
    flashcards: cardReducer,
    match5: match5Reducer,
    user: userReducer,
    notification: notificationReducer,
    avatar: avatarReducer,
  }
})

export default store