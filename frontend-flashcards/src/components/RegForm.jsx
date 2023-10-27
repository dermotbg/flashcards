import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../services/users'
import { setMessage } from '../reducers/notificationReducer'

const RegForm = () => {
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.notification)

  const regHandler = async (event) => {
    event.preventDefault()
    const pwRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*].{8,16}$/
    const whspRegex = /\s/
    if(!pwRegex.test(event.target.password.value)){
      dispatch(setMessage({
        message: 'Password must be between 8-16 characters, and contain at least one number and special character',
        isError: true
      }))
      return
    }
    else if (whspRegex.test(event.target.username.value)){
      dispatch(setMessage({
        message: 'Please refrain from using spaces in your username',
        isError: true
      }))
      return
    }
    const userObj = {
      username: event.target.username.value.trim(),
      password: event.target.password.value.trim()
    }
    try{
      await createUser(userObj)
    }
    catch(error){
      dispatch(setMessage({
        message: error.response.data.error,
        isError: true
      }))
    }
    event.target.username.value = '',
    event.target.password.value = ''
  }
  return(
    <>
      <p>Register here to save progress:</p>
      <form onSubmit={regHandler}>
        <input type="text" name="username" label="username" placeholder="username" />
        <input type="password" name="password" label="password" placeholder="password" />
        <button type="submit">submit</button>
      </form>
      {notification ? <div>{notification.message}</div>: null }
    </>
  )
}

export default RegForm