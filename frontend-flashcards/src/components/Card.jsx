import { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import ToggleVisible from './ToggleVisible'
import { useDispatch, useSelector } from 'react-redux'
import { updateScore } from '../reducers/userReducer'
const Card = ({ card }) => {

  const [correct, setCorrect] = useState('')
  const [answerChecked, setAnswerChecked] = useState(false)

  // const user = JSON.parse(window.localStorage.getItem('loggedInUser'))
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('re-rendered')
  }, [] )

  const checkAnswerRef = useRef()

  const checkAnswer = useCallback((event) => {
    event.preventDefault()

    console.log(card)

    const answer = card.bg.localeCompare(event.target.bg.value, 'bg', { sensitivity: 'base' })

    if(!answer){
      setCorrect('green')
      showAnswer()
      let updatedUser = user
      switch (card.difficulty) {
      case 'easy':
        updatedUser = { ...updatedUser, score: updatedUser.score + 1 }
        break
      case 'medium':
        updatedUser = { ...updatedUser, score: updatedUser.score + 2 }
        break
      case 'hard':
        updatedUser = { ...updatedUser, score: updatedUser.score + 3 }
        break
      default:
        break
      }
      dispatch(updateScore(updatedUser))
      setAnswerChecked(true)
    }

    else {setCorrect('red')}
    setTimeout(() => {
      setCorrect('')
    }, 5000)
  }, [card, dispatch, user])

  const showAnswer = () => {
    setAnswerChecked(true)
  }

  return(
    <div>
      <form onSubmit={checkAnswer}>
        <div className='answer' style={{ backgroundColor: correct }} >
          {card.en}
          <div>
            <em>In the context of {card.cat}</em>
          </div>
        </div>
        {answerChecked ? null : <div><input type="text" name="bg" /> <button type="submit">Check answer</button></div>}
      </form>
      <ToggleVisible buttonLabel={'show answer'} ref={checkAnswerRef} onClick={showAnswer}>
        <p>{card.en} / {card.bg}</p>
      </ToggleVisible>
    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired
}

export default Card