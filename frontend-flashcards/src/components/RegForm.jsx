import { createUser } from '../services/users'

const RegForm = () => {

  const regHandler = (event) => {
    event.preventDefault()
    const userObj = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    try{
      createUser(userObj)
    }
    catch(error){
      console.log(error)
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
    </>
  )
}

export default RegForm