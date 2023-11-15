import { useEffect, useState } from 'react'
import { getCards, setSelected } from '../reducers/cardReducer'
import { useDispatch, useSelector } from 'react-redux'
import functions from '../utilities/functions'
import './Card.css'
import MatchCard from './MatchCard'

const Match5 = () => {

  const cards = useSelector((state) => state.flashcards)
  const [match, setMatch] = useState([])
  const [correct, setCorrect] = useState('none')
  // separate state to shuffle opposite selection again
  const [shuffledEn, setShuffledEn] = useState([])

  const dispatch = useDispatch()
  // let shuffled10 = []

  useEffect(() => {
    dispatch(getCards())
  }, [dispatch])

  const triggerStart = () => {
    dispatch(setSelected(functions.getRandomCards([...cards.all], 5)))
  }

  useEffect(() => {
    setShuffledEn(functions.shuffle([...cards.selected]))
  }, [cards.selected])

  const matchHandler = (card, event) => {
    console.log('card', card)
    console.log('event', event)
    if(match[0]) {
      setMatch([...match, event.target.name])
      console.log('m0 + card.bg', match[0], card.bg)
      console.log('m1 + card.en', event.target.value, card.en)
      if(match[0] === card.bg && event.target.value === card.en){
        console.log('correct')
        setCorrect('green')
        setMatch([])
        setTimeout(() => {
          setCorrect('')
        }, 1000)
        return
      }
      console.log('incorrect')
      setCorrect('red')
      setTimeout(() => {
        setCorrect('')
      }, 1000)
      return
    }
    console.log(event.target.value)
    setMatch([event.target.value])
  }
  return(
    <div>
      {cards.all[0] ? <button onClick={() => triggerStart()} >Start!</button> : <div>Loading...</div>}
      <div className='matchBox'>
        <div id='bg-container'>
          {cards.selected.length !== 0
            ?
            cards.selected.map((c) => {
              return(<MatchCard card={c} key={`${c.bg}-bg`} matchHandler={matchHandler} correct={correct} />)
            })
            : null}
        </div>
        <div id='en-container'>
          {shuffledEn.length !== 0
            ?
            shuffledEn.map((c) => {
              return(<MatchCard card={c} en={true} key={`${c.en}-en`} matchHandler={matchHandler} correct={correct} />)
            })
            : null}
        </div>
      </div>
    </div>
  )
}

export default Match5