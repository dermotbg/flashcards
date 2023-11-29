import {
  Box,
  Flex,
  Avatar as BlankAvatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Link,
} from '@chakra-ui/react'
import Avatar from './Avatar'
import { logoutUser } from '../reducers/userReducer'
import { useDispatch } from 'react-redux'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

// import { MoonIcon, SunIcon } from '@chakra-ui/icons'


// const NavLink = (props) => {
//   const { children } = props

//   return (
//     <Box
//       as="a"
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//       }}
//       href={'#'}>
//       {children}
//     </Box>
//   )
// }




const NavBar = () => {
  // const { colorMode, toggleColorMode } = useColorMode()
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const login = JSON.parse(window.localStorage.getItem('loggedInUser'))
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const logoutHandler = () => {
    dispatch(logoutUser())
    navigate('/')
  }


  return (
    // <div className='navbarContainer' style={navbarContainer}>
    //     <Link to='/'>Home</Link>
    //     {user ? <Link to={`/user/${user.id}`}>Account</Link> : <Link to='#'>Something</Link>  }
    //     <Link to='#'>TBD</Link>
    //     {login
    //       ?
    //       <div style={{ ...navbarContainer, border: 'none' }}>
    //         <div>
    //           <div>Hello {user.username}</div>
    //           <div>Current Score: {user.score}</div>
    //           <button onClick={logoutHandler}>logout</button>
    //         </div>
    //         <div>
    //           <Avatar size={30}/>
    //         </div>
    //       </div>
    //       : null}
    //   </div>
    <>
      <Box bg='brand.mainBlue' color='brand.white'>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Flex w={200}
            ml={10}
            direction={'row'}
            justifyContent={'space-between'}>
            <Box>
              <RouterLink to='/'>Home</RouterLink>
            </Box>
            {login
              ?
              <Box>
                {/* <RouterLink to='/'>Games</RouterLink> */}
                <Menu>
                  <MenuButton
                    as={Button}
                    // rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                    color='brand.white'>
                      Games
                  </MenuButton>
                  <MenuList
                    alignItems={'center'}
                    bg='brand.mainBlue'
                    color='brand.white'
                  >
                    <MenuItem bg='brand.mainBlue' as={RouterLink} to='/random10' >Random 10</MenuItem>
                    <MenuItem bg='brand.mainBlue' as={RouterLink} to='/match5' >Match 5</MenuItem>
                    <MenuItem bg='brand.mainBlue' as={RouterLink} to='/hangman' >Hangman</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
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
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}>
                      <Avatar
                        mr={'10'}
                        size={50}
                        // src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </MenuButton>
                    <MenuList
                      alignItems={'center'}
                      bg='brand.mainBlue'
                    >
                      <br />
                      <Center>
                        <Avatar
                          size={100}
                          // src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                      </Center>
                      <br />
                      <Center>
                        <p>Hey {login.username}!</p>
                      </Center>
                      <br />
                      <MenuDivider />
                      <MenuItem bg='brand.mainBlue' as={RouterLink} to={`/user/${login.id}`} >Account Settings</MenuItem>
                      <MenuItem bg='brand.mainBlue'>Points Shop</MenuItem>
                      <MenuItem onClick={() => logoutHandler} bg='brand.mainBlue'>Logout</MenuItem>
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