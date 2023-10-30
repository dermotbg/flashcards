import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RegForm from './components/RegForm'
import Login from './components/LoginForm'
import { checkLogin, logoutUser } from './reducers/userReducer'
import Random10 from './components/Random10'

const App = () => {
  const login = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('login checked')
    dispatch(checkLogin())
    setInterval(() => {
      dispatch(checkLogin())
    }, (6000 * 61))
    // need to force logout on expired token!!
    // when router in place, redirect to login form
  }, [dispatch])

  return(
    <>
      {login
        ?
        <div>
          <div>Hello {login.username}</div>
          <div>Current Score: {login.score}</div>
          <button onClick={() => dispatch(logoutUser())}>logout</button>
          <Random10 />
        </div>
        : null}
      {!login
        ?
        <div>
          <Login />
          <RegForm />
        </div>
        : null
      }
    </>
  )
}

export default App