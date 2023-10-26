import { createSlice } from '@reduxjs/toolkit'
import { loginReq } from '../services/login'
import flashcardService from '../services/flashcards'

const loginSlice = createSlice({
  name: 'login',
  initialState: null,
  reducers: {
    setUser(state, action){
      return action.payload
    },
    logoutUser(){
      return null
    }
  }
})

export const { setUser, logoutUser } = loginSlice.actions

export const loginUser = (loginObj) => {
  return async dispatch  => {
    const user = await loginReq(loginObj)
    flashcardService.setToken(user.token)
    window.localStorage.setItem('loggedInUser', JSON.stringify(user))
    dispatch(setUser(user))
  }
}

export const checkLogin = () => {
  return async dispatch => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser)
      flashcardService.setToken(user.token)
      dispatch(setUser(user))
    }
  }
}


export default loginSlice.reducer