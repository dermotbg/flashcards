import { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import ToggleVisible from './ToggleVisible'
import { useDispatch, useSelector } from 'react-redux'
import { updateScore } from '../reducers/userReducer'
import { rateCard } from '../reducers/cardReducer'
const Card = ({ card }) => {

  const [correct, setCorrect] = useState('')
  const [answerChecked, setAnswerChecked] = useState(false)

  // const user = JSON.parse(window.localStorage.getItem('loggedInUser'))
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('re-rendered')
    // console.log(user)
  }, [] )

  const checkAnswerRef = useRef()

  const checkAnswer = useCallback((event) => {
    event.preventDefault()

    console.log(card)

    const answer = card.bg.localeCompare(event.target.bg.value, 'bg', { sensitivity: 'base' })

    if(!answer){
      setCorrect('green')
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


  const ratingHandler = (card, event) => {
    const cardObj = { ...card }
    // check if user has already rated card
    if(card.ratedBy.find((i) => i.id === user.id)){
      console.log('heres the delete path')
      const index = card.ratedBy.findIndex(i => i.username === user.username)

      // future me needs to implement plus and minus conditionals for the below
      cardObj.rating = card.rating - 1
      cardObj.ratedBy = [ ...card.ratedBy ] // copy needed for splice to work
      cardObj.ratedBy.splice(index, 1)
      // const undo = true
      dispatch(rateCard(cardObj))
      return
    }

    if(event.target.name === 'plus'){
      cardObj.ratedBy = { user: user.id, rating: '+'}
      cardObj.rating = card.rating + 1
      dispatch(rateCard(cardObj))
      return
    }
    cardObj.ratedBy = { user: user.id, rating: '-'}
    cardObj.rating = card.rating - 1
    dispatch(rateCard(cardObj))
  }

  return(
    <div>
      <form onSubmit={checkAnswer}>
        <div className='answer' style={{ backgroundColor: correct }} >
          {card.en}
          <div>
            <em>In the context of {card.cat}</em>
            <div>{card.rating}</div> 
          </div>
          <button type='button' name='plus' onClick={(e) => ratingHandler(card, e)}>rate card +</button>
          <button type='button' name='minus' onClick={(e) => ratingHandler(card, e)} >rate card -</button>
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