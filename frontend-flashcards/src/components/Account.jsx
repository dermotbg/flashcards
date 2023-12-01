import { useEffect } from 'react'
import { get1User } from '../reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import Loading from './Loading'


const Account = ({ login }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    if(login.id) dispatch(get1User(login.id))
  },[dispatch, login.id])

  const getDate = (dateStr) => {
    const dateObj = new Date(dateStr)
    return dateObj
  }
  // check for user pre date load
  if(!user.createdAt) return <Loading />

  const dateObj = getDate(user.createdAt)

  return(
    <div>
      <Avatar />
      <p>welcome {user.username}</p>
      <p>your account was created {dateObj.toString()}</p>
      <p>you currently have a score of {user.score}</p>
      {user && !user.ratedCards.length ? null : <p>your currently have rated {user.ratedCards.length} cards </p> }
    </div>
  )
}

Account.propTypes = {
  login: PropTypes.object.isRequired
}

export default Account