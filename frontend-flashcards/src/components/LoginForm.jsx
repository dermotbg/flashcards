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
    <Box pb={5}>
      <form onSubmit={loginHandler}>
        <FormControl isRequired>
          <FormLabel >Username</FormLabel>
          <Input name="username" placeholder='Username' p={5} mb={5} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel >Password</FormLabel>
          <Input p={5} type="password" name="password" placeholder='Password' mb={5} />
        </FormControl>
        <Button
          p={5}
          bg={'brand.mainBlue'}
          color={'brand.orange'}
          _hover={{
            background: 'white',
            color: 'brand.mainBlue',
          }}
          type='submit'
        >
          Login
        </Button>
      </form>
    </Box>
  )
}

export default Login