import PropTypes from 'prop-types'
import { useEffect } from 'react'
import functions from '../utilities/functions'
import { useDispatch, useSelector } from 'react-redux'
import { setHangmanWord } from '../reducers/hangmanReducer'

const Hangman = ({ cards }) => {
  const mainCard = useSelector(state => state.hangman.card)
  const guessed = useSelector(state => state.hangman.guessed)
  const dispatch = useDispatch()

  useEffect(() => {
    const cardDealt = functions.getRandomCards(cards.all, 1)
    dispatch(setHangmanWord(cardDealt[0]))
  },[cards])

  if(!mainCard) return <div>Loading...</div>
  return(
    <div>
      <div>
        <div>Here is the EN: {mainCard.en}</div>
      </div>
    </div>
  )
}

Hangman.propTypes = {
  cards: PropTypes.object.isRequired,
}

export default Hangman