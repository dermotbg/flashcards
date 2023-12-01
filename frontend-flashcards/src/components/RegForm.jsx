import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../services/users'
import { setMessage } from '../reducers/notificationReducer'
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

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
    <Box pb={5}>
      <form onSubmit={regHandler}>
        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input name="username" placeholder='Username' p={5} mb={5}  />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" placeholder='Password' p={5} mb={5}  />
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
          Register
        </Button>
      </form>
      {notification ? <div>{notification.message}</div>: null }
    </Box>
  )
}

export default RegForm