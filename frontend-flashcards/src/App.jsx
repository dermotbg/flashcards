import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import RegForm from './components/RegForm'
import Login from './components/LoginForm'
import { checkLogin } from './reducers/loginReducer'
import Random10 from './components/Random10'

const App = () => {
  const login = useSelector((state) => state.login)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkLogin())
  }, [dispatch])

  return(
    <>
      <div>Hello Flashcards</div>
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