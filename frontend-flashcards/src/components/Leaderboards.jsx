import { useEffect } from 'react'
import Loading from './Loading'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../reducers/allUsersReducer'


const Leaderboards = () => {

  const users = useSelector((state) => state.allUsers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
  },[])

  
  if(!users) return <Loading />
  return(

    <p>coming soon....</p>
  )
}

export default Leaderboards