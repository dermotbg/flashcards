import { useState } from 'react'
import { addToMatched, resetActive, resetGame, set5, setActive, setDisabled } from '../reducers/match5Reducer'
import { useDispatch, useSelector } from 'react-redux'
import { PropTypes } from 'prop-types'
import functions from '../utilities/functions'
import './Card.css'
import MatchCard from './MatchCard'
import { updateScore } from '../reducers/userReducer'
import { Box } from '@chakra-ui/react'
import Loading from './Loading'

const Match5 = ({ cards }) => {

  const activeCards = useSelector((state) => state.match5)
  const user = useSelector((state) => state.user) //need user for addScore func
  const [match, setMatch] = useState([])
  const [correct, setCorrect] = useState('none')

  const dispatch = useDispatch()

  //get 5 cards to be used from parent card state
  const triggerStart = () => {
    const cardsToUse = functions.getRandomCards([...cards.all], 5)
    // set5 also adds disabled attribute to the cards
    dispatch(set5(cardsToUse))
  }

  const matchHandler = (card, event) => {
    if(match[0]) {
      setMatch([...match, event.target.name])
      if((match[0] === card.bg && event.target.value === card.en || match[0] === card.en && event.target.value === card.bg)){
        console.log('correct')
        setCorrect('green')
        // calc players new score
        let updatedUser = functions.addScore(user, card)
        // disable correct answer from future use
        dispatch(setDisabled(card))
        // set all other disabled cards back to active
        dispatch(resetActive(card))
        // add card to array of matched cards
        dispatch(addToMatched(card))
        // add score to player acc
        dispatch(updateScore(updatedUser))
        setMatch([])
        setTimeout(() => {
          setCorrect('')
        }, 1000)
        return
      }
      console.log('incorrect')
      setCorrect('red')
      // unselect the radio button here?
      setTimeout(() => {
        setCorrect('')
      }, 1000)
      return
    }
    setMatch([event.target.value])
    dispatch(setActive(event.target.value))
  }

  const startHandler = () => {
    dispatch(resetGame())
    triggerStart()
    setMatch([])
  }

  // win state
  if (activeCards.matched.length === 5){
    return (
      <div>
        Congrats! All cards matched!
        <button onClick={startHandler} >Start Again!</button>
      </div>
    )
  }

  return(
    <Box flex={1}>
      {cards.all[0] ? <button onClick={startHandler} >Start!</button> : <Loading />}
      <div className='match-box'>
        <div id='bg-container'>
          {activeCards.bg.length !== 0
            ?
            activeCards.bg.map((c) => {
              return(<MatchCard card={c} key={`${c.bg}-bg`} matchHandler={matchHandler} correct={correct} disabled={c.disabled} />)
            })
            : null}
        </div>
        <div id='en-container'>
          {activeCards.en.length !== 0
            ?
            activeCards.en.map((c) => {
              return(<MatchCard card={c} en={true} key={`${c.en}-en`} matchHandler={matchHandler} correct={correct} disabled={c.disabled} />)
            })
            : null}
        </div>
      </div>
    </Box>
  )
}

Match5.propTypes = {
  cards: PropTypes.object.isRequired,
}

export default Match5