import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RegForm from './components/RegForm'
import Login from './components/LoginForm'
import { checkLogin, get1User, logoutUser } from './reducers/userReducer'
import Random10 from './components/Random10'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'

import './components/Gen.css'
import Avatar from './components/Avatar'
import { getAvatar } from './reducers/avatarReducer'
import Match5 from './components/Match5'
import { getCards } from './reducers/cardReducer'
import Hangman from './components/Hangman'
import { Box, Flex } from '@chakra-ui/react'

import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  const user = useSelector((state) => state.user)
  const cards = useSelector((state) => state.flashcards)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const login = window.localStorage.getItem('loggedInUser')

  useEffect(() => {
    if(login){
      dispatch(checkLogin())
      setInterval(() => {
        dispatch(checkLogin())
      }, (6000 * 61))
    }
    if(!login){navigate('/')}
    // need to force logout on expired token!!
  }, [dispatch, login])


  useEffect(() => {
    if (user && user.avatar){
      dispatch(getAvatar(user.avatar))
    }
  }, [user])

  // fetch cards when app accessed. Possibly need to refactor into when there's an active login
  useEffect(() => {
    console.log('cards fetched from app level')
    dispatch(getCards())
  }, [dispatch])

  const navbarContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '100%',
    padding: '5px 5px 10px 5px',
    border: 'solid'
  }

  // const logoutHandler = () => {
  //   dispatch(logoutUser())
  //   navigate('/')
  // }

  return(
    <Flex
      direction='column'
      flex={1}
      minH={'calc(100vh - 40px)'}
      // backgroundColor='brand.orange'
      // color='brand.white'
    >
      <NavBar />
      <Routes>
        <Route path='/' element={<Home login={login} />} />
        <Route path='/random10' element={<Random10 cards={cards} />} />
        {user ? <Route path='/user/:id' element={<Account login={user} />} /> : null }
        <Route path='/match5' element={<Match5 cards={cards} />} />
        <Route path='/hangman' element={<Hangman cards={cards} />} />
      </Routes>
      <Footer />
    </Flex>
  )
}

export default App