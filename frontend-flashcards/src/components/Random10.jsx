import { setSelected } from '../reducers/cardReducer'
import { useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types'
import functions from '../utilities/functions'

import { Box, Center, Button } from '@chakra-ui/react'
import Carousel from './Carousel'
import Loading from './Loading'
import InactiveScreen from './InactiveScreen'
import { useState } from 'react'

const Random10 = ({ cards }) => {

  const [gameActive, setGameActive] = useState(false)

  const dispatch = useDispatch()

  const triggerStart = () => {
    setGameActive(true)
    dispatch(setSelected(functions.getRandomCards([...cards.all], 10)))
  }

  return(
    <Box flex={1}>
      {cards.all[0]
        ?
        <InactiveScreen startHandler={triggerStart} gameActive={gameActive} mainText={'Are you ready?'} buttonText={'Start!'}/>
        :
        <Loading />
      }
      {gameActive
        ?
        <Center>
          <Button
            mt={10}
            mb={10}
            minWidth={'10vw'}
            borderRadius={'full'}
            bg={'brand.mainBlue'}
            color={'brand.orange'}
            border={'solid 1px black'}
            boxShadow={'1px 1px .5em black'}
            onClick={() => triggerStart()} >Reset Cards!
          </Button>
        </Center>
        : null
      }
      <Box>
        <Carousel cards={cards.selected} gameActive={gameActive}/>
      </Box>
    </Box>
  )
}

Random10.propTypes = {
  cards: PropTypes.object.isRequired
}

export default Random10