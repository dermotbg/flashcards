import { createSlice } from '@reduxjs/toolkit'
import { loginReq } from '../services/login'
import flashcardService from '../services/flashcards'
import { addScore, getUser } from '../services/users'
import { jwtDecode } from 'jwt-decode'

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser(state, action){
      return action.payload
    },
    logoutUser(){
      window.localStorage.removeItem('loggedInUser')
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
    // console.log('login checked')
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser) {
      // come back to this below
      const currentDate = new Date()
      const decoded = jwtDecode(loggedInUser)
      if(decoded.exp < currentDate.getTime()){
        console.log('login expired exp:', decoded.exp, 'current:',currentDate.getTime(), 'difference:', (decoded.exp - currentDate.getTime()))
        dispatch(logoutUser())

      }
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

export const get1User = (userObj) => {
  return async () => {
    const response = await getUser(userObj)
    return response.data
  }
}

export default userSlice.reducer