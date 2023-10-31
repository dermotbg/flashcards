import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RegForm from './components/RegForm'
import Login from './components/LoginForm'
import { checkLogin, logoutUser } from './reducers/userReducer'
import Random10 from './components/Random10'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './components/Home'

import './components/Gen.css'

const App = () => {
  const login = useSelector((state) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  if(!login){navigate('/')}

  useEffect(() => {
    console.log('login checked')
    dispatch(checkLogin())
    setInterval(() => {
      dispatch(checkLogin())
    }, (6000 * 61))
    // need to force logout on expired token!!
    // when router in place, redirect to login form
  }, [dispatch])

  const navbarContainer = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '100%',
    padding: '5px 5px 10px 5px',
    border: 'solid'
  }


  return(
    <div>
      <div className='navbarContainer' style={navbarContainer}>
        <Link to='/'>Home</Link>
        {login ? <Link to='#'>Account</Link> : <Link to='#'>Something</Link>  }
        <Link to='#'>TBD</Link>
        {login
          ?
          <div>
            <div>Hello {login.username}</div>
            <div>Current Score: {login.score}</div>
            <button onClick={() => dispatch(logoutUser())}>logout</button>
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
      </Routes>
    </div>
  )
}

export default App