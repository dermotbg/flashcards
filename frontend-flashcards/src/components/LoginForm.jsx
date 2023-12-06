import { PropTypes } from 'prop-types'
import { useDispatch } from 'react-redux'
import { loginUser } from '../reducers/userReducer'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

const Login = ({ buttonColor, buttonText, hoverColor, hoverText }) => {

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
          <Input _focus={{ borderColor: buttonColor, boxShadow: '0 0 0 black' }} name="username" placeholder='Username' p={5} mb={5} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel >Password</FormLabel>
          <Input _focus={{ borderColor: buttonColor, boxShadow: '0 0 0 black' }} p={5} type="password" name="password" placeholder='Password' mb={5} />
        </FormControl>
        <Button
          p={5}
          bg={buttonColor}
          color={buttonText}
          _hover={{ bg: hoverColor, color: hoverText  }}
          type='submit'
        >
          Login
        </Button>
      </form>
    </Box>
  )
}

export default Login

Login.propTypes = {
  buttonColor: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  hoverText: PropTypes.string.isRequired,
}
