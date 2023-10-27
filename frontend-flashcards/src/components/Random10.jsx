import { clearCards, getCards, setSelected } from '../reducers/cardReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import Card from './Card'

const Random10 = () => {
  const [disabled, setDisabled] = useState(false)

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

  const getRandomCards = (cards, amount) => {
    const output = []
    const shuffled = shuffle([...cards])
    for (let i = 0; i < amount; i++){
      output.push(shuffled[randomArrayIndex(0, shuffled.length -1)])
    }
    return output
  }

  const triggerStart = () => {
    setDisabled(true)
    dispatch(clearCards())
    dispatch(getCards())
    const selectedTen = getRandomCards(cards.all, 10)
    dispatch(setSelected(selectedTen))
    setTimeout(() => {
      setDisabled(false)
    }, 1000)
  }

  return(
    <div>
      <button onClick={() => triggerStart()} disabled={disabled}>Give me 10 random cards!</button>
      {/* <button onClick={() => triggerStart()} style={{display:'none'}}>Restart</button> */}
      <div>
        {cards.selected.length !== 0 ? cards.selected.map(c => {
          return <Card key={uuid()} card={c}/>
        }): null}
      </div>
    </div>
  )
}

export default Random10