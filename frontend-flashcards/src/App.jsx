import { useEffect } from 'react'
import { getCards, setSelected } from './reducers/cardReducer'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid'

import Card from './components/Card'


const App = () => {

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
    const selectedTen = getRandomCards(cards.all, 10)
    dispatch(setSelected(selectedTen))
  }

  return(
    <>
      <div>Hello Flashcards</div>
      <button onClick={() => triggerStart()}>Start</button>
      <div>
        {cards.selected.length !== 0 ? cards.selected.map(c => {
          return <Card key={uuid()} card={c}/>
        }): null}
      </div>

    </>
  )
}

export default App