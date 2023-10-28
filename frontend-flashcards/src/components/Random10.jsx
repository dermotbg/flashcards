import { getCards, setSelected } from '../reducers/cardReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'

import Card from './Card'

const Random10 = () => {

  const cards = useSelector((state) => state.flashcards)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCards())
  }, [dispatch])


  const shuffle = (array) => {
    // define variables
    let capacity = array.length, current, random
    // while there are no remaining elements
    while (capacity) {
      // pick an element
      random = Math.floor(Math.random() * capacity--)
      // swap it with the current element
      current = array[capacity]
      array[capacity] = array[random]
      array[random] = current
    }
    return array
  }

  const randomArrayIndex = (min, max) => {
    return Math.floor(Math.random() * ((max - min + 1) + min))
  }

  const getRandomCards = useCallback((cards, amount) => {
    const output = []
    const shuffled = shuffle([...cards])
    for (let i = 0; i < amount; i++){
      output.push(shuffled[randomArrayIndex(0, shuffled.length -1)])
    }
    return output
  }, [])

  const triggerStart = () => {
    dispatch(setSelected(getRandomCards([...cards.all], 10)))
  }

  return(
    <div>
      {cards.all[0] ? <button onClick={() => triggerStart()} >Give me 10 random cards!</button> : <div>Loading...</div>}
      {/* <button onClick={() => triggerStart()} style={{display:'none'}}>Restart</button> */}
      <div>
        {cards.selected.length !== 0 ? cards.selected.map(c => {
          return <Card key={c.id} card={c}/>
        }): null}
      </div>
    </div>
  )
}

export default Random10