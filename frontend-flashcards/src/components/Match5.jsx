import { useEffect, useState } from 'react'
import { addToMatched, resetActive, set5, setActive, setDisabled } from '../reducers/match5Reducer'
import { useDispatch, useSelector } from 'react-redux'
import { PropTypes } from 'prop-types'
import functions from '../utilities/functions'
import './Card.css'
import MatchCard from './MatchCard'

const Match5 = ({ cards }) => {

  const activeCards = useSelector((state) => state.match5)
  const [match, setMatch] = useState([])
  const [correct, setCorrect] = useState('none')
  // separate state to shuffle opposite selection again
  const [shuffledEn, setShuffledEn] = useState([])

  const dispatch = useDispatch()

  // current state is broken. needs to be rewritten
  // state should hold two separate selected arrays with bg and en
  // this way we can have more control over individual sections and disable as needed.


  //get 5 cards to be used from parent card state
  const triggerStart = () => {
    const cardsToUse = functions.getRandomCards([...cards.all], 5)
    // set5 also adds disabled attribute to the cards
    dispatch(set5(cardsToUse))
    // dispatch(setDisabled(cardsToUse))
  }

  // shuffle again for bg selections
  useEffect(() => {
    // set boolean to track initial load and then use if statement.

    setShuffledEn(functions.shuffle([...activeCards.en]))
  }, [activeCards.en])

  const matchHandler = (card, event) => {
    if(match[0]) {
      setMatch([...match, event.target.name])
      console.log('m0 + card.bg', match[0], card.bg)
      console.log('m1 + card.en', event.target.value, card.en)
      if((match[0] === card.bg && event.target.value === card.en || match[0] === card.en && event.target.value === card.bg)){
        console.log('correct')
        setCorrect('green')
        // cards.....
        // disable correct answer from future use
        dispatch(setDisabled(card))
        // set all other disabled cards back to active
        dispatch(resetActive(card))
        // add card to array of matched cards
        dispatch(addToMatched(card))
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
    console.log(event.target.value)
    setMatch([event.target.value])
    dispatch(setActive(event.target.value))
    // dispatch(setSelected(updatedCards))
  }

  const startHandler = () => {
    triggerStart()
    setMatch([])
  }

  return(
    <div>
      {cards.all[0] ? <button onClick={startHandler} >Start!</button> : <div>Loading...</div>}
      <div className='matchBox'>
        <div id='bg-container'>
          {activeCards.bg.length !== 0
            ?
            activeCards.bg.map((c) => {
              return(<MatchCard card={c} key={`${c.bg}-bg`} matchHandler={matchHandler} correct={correct} disabled={c.disabled} />)
            })
            : null}
        </div>
        <div id='en-container'>
          {shuffledEn.length !== 0
            ?
            shuffledEn.map((c) => {
              return(<MatchCard card={c} en={true} key={`${c.en}-en`} matchHandler={matchHandler} correct={correct} disabled={c.disabled} />)
            })
            : null}
        </div>
      </div>
    </div>
  )
}

Match5.propTypes = {
  cards: PropTypes.object.isRequired,
}

export default Match5