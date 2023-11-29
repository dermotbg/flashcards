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
      <Box bg='brand.mainBlue' color='brand.white'>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Flex
            w={250}
            ml={10}
            direction={'row'}
            justifyContent={'space-between'}
            color='brand.white'
            // border={'solid red'}
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
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}
                      color='brand.white'
                      _active={{
                        color: 'brand.white',
                      }}
                    >
                        Games
                    </MenuButton>
                    <MenuList
                      alignItems={'center'}
                      bg='brand.mainBlue'
                      color='brand.white'
                      p={0}
                    >
                      <MenuItem
                        bg='brand.mainBlue'
                        as={RouterLink}
                        to='/random10'
                        borderTopRadius='inherit'
                        _hover={{
                          bg: 'brand.white',
                          color: 'brand.mainBlue',
                        }}
                      >
                        Random 10
                      </MenuItem>
                      <MenuDivider borderColor='brand.white' m={0} p={0}/>
                      <MenuItem
                        bg='brand.mainBlue'
                        as={RouterLink}
                        to='/match5'
                        _hover={{
                          bg: 'brand.white',
                          color: 'brand.mainBlue',
                        }}
                      >
                        Match 5
                      </MenuItem>
                      <MenuDivider borderColor='brand.white' m={0} p={0}/>
                      <MenuItem
                        bg='brand.mainBlue'
                        as={RouterLink}
                        to='/hangman'
                        borderBottomRadius='inherit'
                        _hover={{
                          bg: 'brand.white',
                          color: 'brand.mainBlue',
                        }}
                      >
                        Hangman
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box pl={4}>
                  <Link variant={'link'} as={RouterLink} to='/leaderboards'>Leaderboards</Link>
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
                    >
                      <Avatar
                        mr={'10'}
                        size={50}
                      />
                    </MenuButton>
                    <MenuList
                      alignItems={'center'}
                      bg='brand.mainBlue'
                      color='brand.white'
                      p={0}
                      borderRadius='0.305rem'
                    >
                      <br />
                      <Center>
                        <Avatar
                          size={100}
                        />
                      </Center>
                      <br />
                      <Center>
                        <p>Hey {login.username}!</p>
                      </Center>
                      <Center>
                        <p>Current Score: {login.score}</p>
                      </Center>
                      <br />
                      <MenuDivider borderColor='brand.white' m={0} p={0}/>
                      <MenuItem
                        bg='brand.mainBlue'
                        color='brand.white'
                        as={RouterLink}
                        to={`/user/${login.id}`}
                        _hover={{
                          bg: 'brand.white',
                          color: 'brand.mainBlue',
                        }}
                      >
                        Account Settings
                      </MenuItem>
                      <MenuDivider borderColor='brand.white' m={0} p={0}/>
                      <MenuItem
                        bg='brand.mainBlue'
                        color='brand.white'
                        _hover={{
                          bg: 'brand.white',
                          color: 'brand.mainBlue',
                        }}
                      >
                        Points Shop
                      </MenuItem>
                      <MenuDivider borderColor='brand.white' m={0} p={0}/>
                      <MenuItem
                        onClick={logoutHandler}
                        bg='brand.mainBlue'
                        color='brand.white'
                        pb={2}
                        borderBottomRadius='inherit'
                        _hover={{
                          bg: 'brand.white',
                          color: 'brand.mainBlue',
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