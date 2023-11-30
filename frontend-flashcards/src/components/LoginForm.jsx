import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

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
    <Box>
      <form onSubmit={loginHandler}>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input name="username" placeholder='username' />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" placeholder='Password' />
        </FormControl>
        <Button type='submit'>Login</Button>
      </form>
    </Box>
  )
}

export default Login