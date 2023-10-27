import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RegForm from './components/RegForm'
import Login from './components/LoginForm'
import { checkLogin } from './reducers/userReducer'
import Random10 from './components/Random10'

const App = () => {
  const login = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkLogin())
  }, [dispatch])

  if(!login) return(<div>Loading...</div>)
  return(
    <>
      <div>Hello {login.username}</div>
      <div>Current Score: {login.score}</div>
      {!login
        ?
        <div>
          <Login />
          <RegForm />
        </div>
        : null
      }
      <Random10 />
    </>
  )
}

export default App