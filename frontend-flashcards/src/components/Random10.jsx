import { setSelected } from '../reducers/cardReducer'
import { useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types'
import functions from '../utilities/functions'

import Card from './Card'

const Random10 = ({ cards }) => {

  const dispatch = useDispatch()

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

Random10.propTypes = {
  cards: PropTypes.object.isRequired
}

export default Random10