import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/loginReducer'

const Login = () => {

  const dispatch = useDispatch()

  const loginHandler = (event) => {
    event.preventDefault()
    const loginObj = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    dispatch(loginUser(loginObj))
  }



  return(
    <>
      <p>login:</p>
      <form onSubmit={loginHandler}>
        <input type="text" name="username" />
        <input type="password" name="password"  />
        <button type="submit">login</button>
      </form>
    </>
  )
}

export default Login