import { createSlice } from '@reduxjs/toolkit'
import { loginReq } from '../services/login'
import flashcardService from '../services/flashcards'
import { addScore } from '../services/users'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action){
      return action.payload
    },
    logoutUser(){
      return null
    },
    setScore(state, action){
      return action.payload
    }
  }
})

export const { setUser, logoutUser, setScore } = userSlice.actions

export const loginUser = (loginObj) => {
  return async dispatch  => {
    const user = await loginReq(loginObj)
    flashcardService.setToken(user.token)
    window.localStorage.setItem('loggedInUser', JSON.stringify(user))
    dispatch(setUser(user))
  }
}

export const checkLogin = () => {
  return dispatch => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser)
      flashcardService.setToken(user.token)
      dispatch(setUser(user))
    }
  }
}

export const updateScore = (userObj) => {
  return async dispatch => {
    await addScore(userObj)
    dispatch(setScore(userObj))
  }
}


export default userSlice.reducer