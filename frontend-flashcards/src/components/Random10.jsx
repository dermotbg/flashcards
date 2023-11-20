import { getCards, setSelected } from '../reducers/cardReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import functions from '../utilities/functions'

import Card from './Card'

const Random10 = ({ cards }) => {

  // const cards = useSelector((state) => state.flashcards)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getCards())
  // }, [dispatch])

  const triggerStart = () => {
    dispatch(setSelected(functions.getRandomCards([...cards.all], 10)))
  }

  return(
    <div>
      {cards.all[0] ? <button onClick={() => triggerStart()} >Give me 10 random cards!</button> : <div>Loading...</div>}
      <div>
        {cards.selected.length !== 0 ? cards.selected.map(c => {
          return <Card key={c.id} card={c}/>
        }): null}
      </div>
    </div>
  )
}

export default Random10