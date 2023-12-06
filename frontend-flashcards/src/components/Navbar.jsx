import {
  Box,
  Flex,
  Avatar as BlankAvatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
  Link,
  Text,
} from '@chakra-ui/react'
import Avatar from './Avatar'
import { logoutUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import { ChevronDownIcon } from '@chakra-ui/icons'


const NavBar = () => {
  const login = JSON.parse(window.localStorage.getItem('loggedInUser'))
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const logoutHandler = () => {
    dispatch(logoutUser())
    navigate('/')
  }


  return (
    <>
      <Box bg='white' color='brand.black' boxShadow={'0em .01em .3em gray'}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Flex
            w={250}
            ml={10}
            direction={'row'}
            justifyContent={'space-between'}
            color='red.400'
          >
            <Box >
              <Link as={RouterLink} variant={'link'} to='/'><b>Home</b></Link>
            </Box>
            {login
              ?
              <Flex>
                <Box pl={5}>
                  <Menu>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      variant={'link'}
                      cursor={'pointer'}
                      color='red.400'
                      _active={{
                        color: 'red.300',
                      }}
                    >
                        Jump to Game
                    </MenuButton>
                    <MenuList
                      alignItems={'center'}
                      boxShadow={'1px 1px .5em black'}
                      color='red.400'
                      p={0}
                    >
                      <MenuItem
                        as={RouterLink}
                        to='/random10'
                        p={3}
                        bg='grey.100'
                        borderTopRadius='inherit'
                        fontWeight='600'
                        _hover={{
                          bg: 'red.400',
                          color: 'white',
                          fontWeight: '900'
                        }}
                        _focus={{
                          bg: 'red.400',
                          color: 'white',
                        }}
                      >
                        Random 10
                      </MenuItem>
                      <MenuDivider borderColor={'grey.300'} m={0} p={0}/>
                      <MenuItem
                        as={RouterLink}
                        to='/match5'
                        p={3}
                        bg='grey.100'
                        fontWeight='600'
                        _hover={{
                          bg: 'red.400',
                          color: 'white',
                          fontWeight: '900'
                        }}
                        _focus={{
                          bg: 'red.400',
                          color: 'white',
                        }}
                      >
                        Match 5
                      </MenuItem>
                      <MenuDivider borderColor={'grey.300'} m={0} p={0}/>
                      <MenuItem
                        as={RouterLink}
                        to='/hangman'
                        p={3}
                        bg='grey.100'
                        borderBottomRadius='inherit'
                        fontWeight='600'
                        _hover={{
                          bg: 'red.400',
                          color: 'white',
                          fontWeight: '900'
                        }}
                        _focus={{
                          bg: 'red.400',
                          color: 'white',
                        }}
                      >
                        Hangman
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box pl={4}>
                  <Link variant={'link'} as={RouterLink} fontWeight={'600'} to='/leaderboards'>Leaderboards</Link>
                </Box>
              </Flex>
              : null
            }
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>

              <Menu>
                {login
                  ?
                  <Box>
                    <MenuButton
                      as={Button}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}
                      // color='red.400'
                      bg={'yellow.200'}
                      _active={{
                        color: 'red.300',
                      }}
                    >
                      <Avatar
                        mr={'10'}
                        size={50}
                      />
                    </MenuButton>
                    <MenuList
                      alignItems={'center'}
                      boxShadow={'1px 1px .5em black'}
                      color='red.400'
                      // bg={'yellow.200'}
                      bg={'grey.100'}
                      p={0}
                      border={'1px solid gray'}
                      borderRadius='0.305rem'
                      fontWeight={'600'}
                    >
                      <Center p={5} >
                        <Avatar
                          size={100}
                        />
                      </Center>
                      <Center >
                        <Text>Hey {login.username}!</Text>
                      </Center>
                      <Center pb={5}>
                        <Text>Current Score: {login.score}</Text>
                      </Center>
                      <MenuDivider borderColor='red.400' m={0} p={0}/>
                      <MenuItem
                        bg='grey.100'
                        color='red.400'
                        as={RouterLink}
                        to={`/user/${login.id}`}
                        _hover={{
                          bg: 'red.400',
                          color: 'white',
                        }}
                      >
                        Account Settings
                      </MenuItem>
                      <MenuDivider borderColor='red.400' m={0} p={0}/>
                      <MenuItem
                        onClick={logoutHandler}
                        bg='grey.100'
                        color='red.400'
                        pb={2}
                        borderBottomRadius='inherit'
                        fontWeight={'inherit'}
                        _hover={{
                          bg: 'red.400',
                          color: 'white',
                        }}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Box>
                  :
                  <Box>
                    <MenuButton
                      as={Button}
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}>
                      <BlankAvatar
                        mr={'10'}
                        size={'sm'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </MenuButton>
                    <MenuList
                      alignItems={'center'}
                      bg='brand.mainBlue'
                    >
                      <br />
                      <Center>
                        <p>Hey Stranger!</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem bg='brand.mainBlue' as={RouterLink} to={'/'} >Login</MenuItem>
                      <MenuItem bg='brand.mainBlue' as={RouterLink} to={'/'} >Register</MenuItem>
                    </MenuList>
                  </Box>
                }
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar