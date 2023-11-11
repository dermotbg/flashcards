import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RegForm from './components/RegForm'
import Login from './components/LoginForm'
import { checkLogin, logoutUser } from './reducers/userReducer'
import Random10 from './components/Random10'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Account from './components/Account'

import './components/Gen.css'
import Avatar from './components/Avatar'
import { getAvatar } from './reducers/avatarReducer'

const App = () => {
  const user = useSelector((state) => state.user)
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

  const navbarContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '100%',
    padding: '5px 5px 10px 5px',
    border: 'solid'
  }

  const logoutHandler = () => {
    dispatch(logoutUser())
    navigate('/')
  }

  return(
    <div>
      <div className='navbarContainer' style={navbarContainer}>
        <Link to='/'>Home</Link>
        {user ? <Link to={`/user/${user.id}`}>Account</Link> : <Link to='#'>Something</Link>  }
        <Link to='#'>TBD</Link>
        {login
          ?
          <div style={{ ...navbarContainer, border: 'none' }}>
            <div>
              <div>Hello {user.username}</div>
              <div>Current Score: {user.score}</div>
              <button onClick={logoutHandler}>logout</button>
            </div>
            <div>
              <Avatar size={30}/>
            </div>
          </div>
          : null}
      </div>
      {!login
        ?
        <div>
          <Login />
          <RegForm />
        </div>
        : null
      }
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/random10' element={<Random10 />} />
        {user ? <Route path='/user/:id' element={<Account login={user} />} /> : null }
      </Routes>
    </div>
  )
}

export default App