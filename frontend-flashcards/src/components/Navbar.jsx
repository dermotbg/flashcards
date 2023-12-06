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
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import Avatar from './Avatar'
import { logoutUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'


const NavBar = () => {
  const login = JSON.parse(window.localStorage.getItem('loggedInUser'))
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { colorMode, toggleColorMode } = useColorMode()

  const menuColor = useColorModeValue('grey.100', 'gray.800')
  const menuTextColor  = useColorModeValue('red.400', 'yellow.400')

  const logoutHandler = () => {
    dispatch(logoutUser())
    navigate('/')
  }



  return (
    <>
      <Box color={useColorModeValue('white', 'gray.800')} boxShadow={useColorModeValue('0em .01em .3em gray','0em .01em .3em black' )}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Flex
            w={250}
            ml={10}
            direction={'row'}
            justifyContent={'space-between'}
            color='red.400'
          >
            <Box >
              <Link as={RouterLink} color={menuTextColor} variant={'link'} to='/'><b>Home</b></Link>
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
                      color={menuTextColor}
                      _active={{
                        color: 'red.300',
                      }}
                    >
                        Jump to Game
                    </MenuButton>
                    <MenuList
                      alignItems={'center'}
                      boxShadow={'1px 1px .5em black'}
                      color={menuTextColor}
                      p={0}
                    >
                      <MenuItem
                        as={RouterLink}
                        to='/random10'
                        p={3}
                        bg={menuColor}
                        borderTopRadius='inherit'
                        fontWeight='600'
                        _hover={{
                          fontWeight: '900'
                        }}
                        _focus={{
                          bg: menuColor,
                          color: menuTextColor,
                        }}
                      >
                        Random 10
                      </MenuItem>
                      <MenuDivider borderColor={'gray.600'} m={0} p={0}/>
                      <MenuItem
                        as={RouterLink}
                        to='/match5'
                        p={3}
                        bg={menuColor}
                        fontWeight='600'
                        _hover={{
                          fontWeight: '900'
                        }}
                        _focus={{
                          bg: menuColor,
                          color: menuTextColor,
                        }}
                      >
                        Match 5
                      </MenuItem>
                      <MenuDivider borderColor={'gray.600'} m={0} p={0}/>
                      <MenuItem
                        as={RouterLink}
                        to='/hangman'
                        p={3}
                        bg={menuColor}
                        borderBottomRadius='inherit'
                        fontWeight='600'
                        _hover={{
                          fontWeight: '900'
                        }}
                        _focus={{
                          bg: menuColor,
                          color: menuTextColor,
                        }}
                      >
                        Hangman
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box pl={4}>
                  <Link
                    variant={'link'}
                    as={RouterLink}
                    color={menuTextColor}
                    fontWeight={'600'} to='/leaderboards'
                  >
                      Leaderboards
                  </Link>
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
                  <Box pr={3}
                    display='flex'
                    dir='row'
                    alignItems={'center'}
                  >
                    <Button mr={5} onClick={toggleColorMode}>
                      {colorMode === 'light'
                        ?
                        <SunIcon  />
                        :
                        <MoonIcon />
                      }
                    </Button>
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
                      bg={menuColor}
                      color={menuTextColor}
                      p={0}
                      border={'1px solid'}
                      borderColor={'gray.600'}
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
                      <MenuDivider borderColor={'gray.600'} m={0} p={0}/>
                      <MenuItem
                        as={RouterLink}
                        to={`/user/${login.id}`}
                        bg={menuColor}
                        color={menuTextColor}
                        fontWeight='600'
                        _hover={{
                          fontWeight: '900'
                        }}
                        _focus={{
                          bg: menuColor,
                          color: menuTextColor,
                        }}
                      >
                        Account Settings
                      </MenuItem>
                      <MenuDivider borderColor={'gray.600'} m={0} p={0}/>
                      <MenuItem
                        onClick={logoutHandler}
                        pb={2}
                        bg={menuColor}
                        color={menuTextColor}
                        borderBottomRadius='inherit'
                        fontWeight='600'
                        _hover={{
                          fontWeight: '900'
                        }}
                        _focus={{
                          bg: menuColor,
                          color: menuTextColor,
                        }}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </Box>
                  :
                  <Flex dir='row'>
                    <Center>
                      <Button mr={5} onClick={toggleColorMode}>
                        {colorMode === 'light'
                          ?
                          <SunIcon  />
                          :
                          <MoonIcon />
                        }
                      </Button>
                      <BlankAvatar
                        mr={'10'}
                        size={'sm'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                  </Flex>
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