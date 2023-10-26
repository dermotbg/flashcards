import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../services/users'
import { setMessage } from '../reducers/notificationReducer'

const RegForm = () => {
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.notification)

  const regHandler = async (event) => {
    event.preventDefault()
    const userObj = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    try{
      await createUser(userObj)
    }
    catch(error){
      // console.log('HEREs the bastid',error.response.data.error)
      dispatch(setMessage({
        message: error.response.data.error,
        isError: true
      }))
    }
    event.target.username.value = '',
    event.target.password.value = ''
  }
  // console.log(notification)
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