import { createSlice } from '@reduxjs/toolkit'

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




export default loginSlice.reducer