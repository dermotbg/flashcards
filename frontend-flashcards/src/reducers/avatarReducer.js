import { createSlice } from "@reduxjs/toolkit";

const avatarSlice = createSlice({
  name: 'avatar',
  initialState: {
    seed: '',
    flip: false,
    backgroundColor: [''],
    translateX: 0,
    translateY: 0,
    beard: [''],
    eyes: [''],
    mouth: [''],
    moustache: [''],
    nose: [''],
    top: [''],
    topColor: [''],
  },
  reducers: {
    setSomething(state, action){
      console.log(action.payload)
      const key = Object.keys(action.payload)[0]
      const value = Object.values(action.payload)[0]
      console.log('key', key)
      console.log('value', value)
      return {  ...state, [key]: value
      }
    }
  }
})

export const { setSomething } = avatarSlice.actions

export default avatarSlice.reducer