import PropTypes from 'prop-types'
import { useEffect } from 'react'
import functions from '../utilities/functions'
import { useDispatch, useSelector } from 'react-redux'
import { setGuessed, setHangmanWord } from '../reducers/hangmanReducer'

const Hangman = ({ cards }) => {
  const mainCard = useSelector(state => state.hangman.card)
  const guessed = useSelector(state => state.hangman.guessed)
  const dispatch = useDispatch()

  useEffect(() => {
    const cardDealt = functions.getRandomCards(cards.all, 1)
    dispatch(setHangmanWord(cardDealt[0]))
  },[cards])

  useEffect(() => {
    if(mainCard && mainCard.bg){
      const wordArray = mainCard.bg.split('')
      console.log(wordArray)
      let guessedArray = []
      for (let char of wordArray){
        if (char === ' '){
          guessedArray.push('\xa0'.repeat(5)) //blank space between words
        }
        else{
          guessedArray.push('_')
        }
      }
      console.log(guessedArray)
      dispatch(setGuessed(guessedArray))
    }
  },[mainCard])

  if(!mainCard && guessed.length === 0) return <div>Loading...</div>
  return(
    <div>
      <div>
        <div>Here is the EN: {mainCard.en}</div>
        <div>Here is the blank: {guessed.map(c => {
          return c !== '_'
            ? c
            :` '${c}${c}${c}${c}' `
        }
        )}</div>
      </div>
    </div>
  )
}

Hangman.propTypes = {
  cards: PropTypes.object.isRequired,
}

export default Hangman