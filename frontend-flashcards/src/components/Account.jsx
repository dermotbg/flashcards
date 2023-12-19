import { useEffect } from 'react'
import { get1User } from '../reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Loading from './Loading'
import { Box, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import functions from '../utilities/functions'


const Account = ({ login }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const headingColor = useColorModeValue('red.400', 'yellow.400')
  const textShadowColor = useColorModeValue('1px 1px 1px gray', '1px 1px 3px black')


  useEffect(() => {
    if(login.id) dispatch(get1User(login.id))
  },[dispatch, login.id])

  // check for user pre date load
  if(!user.createdAt) return <Loading />

  const date = String(functions.getDate(user.createdAt)).substring(0, 25)

  return(
    <Box>
      <Flex flexDirection={'row'}>
        <Stack m={10}>
          <Flex flexDirection={'row'} mt={5}>
            <Heading
              as={'h1'}
              size={'2xl'}
              pb={5}
              pr={5}
              sx={{ textShadow: textShadowColor }}
            >
                  Welcome
            </Heading>
            <Heading
              as={'h1'}
              size={'2xl'}
              color={headingColor}
              sx={{ textShadow: textShadowColor }}
            >
              {login.username}
            </Heading>
          </Flex>
          <Text fontSize={'xl'}>Your account was created: </Text>
          <Text color={headingColor} sx={{ textShadow: textShadowColor }} >{date}</Text>
          <Text fontSize={'xl'}>You currently have a score of: </Text>
          <Text color={headingColor} sx={{ textShadow: textShadowColor }} >{user.score}</Text>
          <Text fontSize={'xl'}>You currently have rated a total of:</Text>
          <Text color={headingColor} sx={{ textShadow: textShadowColor }} >{user.ratedCards.length} cards</Text>
        </Stack>
      </Flex>
    </Box>
  )
}

Account.propTypes = {
  login: PropTypes.object.isRequired
}

export default Account