import { createSlice } from '@reduxjs/toolkit'
import { getAllUser } from '../services/users'


const allUserSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {
    allUsers(state,action){
      return action.payload
    }
  }
})

export const { allUsers } = allUserSlice.actions

export const getAllUsers = () => {
  return async dispatch => {
    const response = await getAllUser()
    dispatch(allUsers(response))
    return response
  }
}

export default allUserSlice.reducer