import { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import ToggleVisible from './ToggleVisible'
const Card = ({ card }) => {


  const [correct, setCorrect] = useState('')
  const [answerChecked, setAnswerChecked] = useState(false)

  const checkAnswerRef = useRef()

  const checkAnswer = (event) => {
    event.preventDefault()
    console.log(card)
    const answer = card.bg.localeCompare(event.target.bg.value, 'bg', { sensitivity: 'base' })
    console.log(answer)
    answer === 0 ? setCorrect('green') : setCorrect('red')
    setTimeout(() => {
      setCorrect('')
    }, 5000)
  }
  const showAnswer = () => {
    setAnswerChecked(true)
  }

  return(
    <div>
      <form onSubmit={checkAnswer}>
        <div className='answer' style={{ backgroundColor: correct }} >
          {card.en}
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