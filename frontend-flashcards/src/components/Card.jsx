import { useState } from 'react'
import PropTypes from 'prop-types'
import './Card.css'
const Card = ({ card }) => {


  const [correct, setCorrect] = useState('')
  // const [inCorrect, setIncorrect] = useState(null)

  // const clr = { color: correct ? 'green' : 'red' }

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

  return(
    <div>
      <form onSubmit={checkAnswer}>
        <div className='answer' style={{ backgroundColor: correct }} >
          {card.en}
        </div>
        <input type="text" name="bg" />
        <button type="submit">Check answer</button>
      </form>

    </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired
}

export default Card