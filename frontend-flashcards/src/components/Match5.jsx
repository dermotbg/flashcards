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

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCards())
  }, [dispatch])

  const triggerStart = () => {
    dispatch(setSelected(functions.getRandomCards([...cards.all], 5)))
  }

  const matchHandler = (card, event) => {
    console.log(card)
    if(match[0]) {
      setMatch([...match, event.target.name])
      console.log('m0 + card.bg', match[0], card.bg)
      console.log('m1 + card.en', event.target.name, card.en)
      if(match[0] === card.bg && event.target.name === card.en){
        console.log('correct')
        setCorrect('green')
        setMatch([])
        return
      }
      console.log('incorrect')
      setCorrect('red')
      return
    }
    console.log(event.target.name)
    setMatch([event.target.name])
  }

  return(
    <div>
      {cards.all[0] ? <button onClick={() => triggerStart()} >Start!</button> : <div>Loading...</div>}
      <div className='matchBox'>
        <div id='bg-container'>
          {cards.selected.length !== 0
            ?
            cards.selected.map((c) => {
              return(<MatchCard card={c} key={`${c.bg}-bg`} matchHandler={(e) => matchHandler(c, e)} correct={correct} />)
              // return(
              //   <div key={`${c.bg}-bg`} style={{ backgroundColor: correct }}>
              //     <input type='radio' id={`${c.bg}-bg`} name={c.bg} disabled={false} onChange={() => matchHandler(c, event)}/>
              //     <label htmlFor={`${c.bg}-bg`}>{c.bg}</label>
              //   </div>
              // )
            })
            : null}
        </div>
        <div id='en-container'>
          {cards.selected.length !== 0
            ?
            cards.selected.map((c) => {
              return(<MatchCard card={c} en={true} key={`${c.en}-en`} matchHandler={(e) => matchHandler(c, e)} correct={correct} />)
              // return(
              //   <div key={`${c.en}-en`} style={{ backgroundColor: correct }}>
              //     <input type='radio' id={`${c.en}-en`} name={c.en} disabled={false} onChange={() => matchHandler(c, event)}/>
              //     <label htmlFor={`${c.en}-en`}>{c.en}</label>
              //   </div>
              // )
            })
            : null}
        </div>
      </div>
    </div>
  )
}

export default Match5