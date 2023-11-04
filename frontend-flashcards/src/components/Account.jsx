import { useEffect } from "react"
import { get1User } from "../reducers/userReducer"
import { useDispatch, useSelector } from "react-redux"

const Account = ({ login }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  console.log(user)

  useEffect(() => {
    dispatch(get1User(login.id))
  },[dispatch])

  const getDate = (dateStr) => {
    const dateObj = new Date(dateStr)
    return dateObj
  }

  if(!user) return <div>Loading</div>
  console.log(user)
  const dateObj = getDate(user.createdAt)
  return(
    <div>
      <p>welcome {user.username}</p>
      <p>your account was created {dateObj}</p>
      <p>you currently have a score of {user.score}</p>
      {!user.ratedCards.length ? null : <p>your currently have rated {user.ratedCards.length} cards </p> }
    </div>
  )
}

export default Account