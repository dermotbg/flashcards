import { useState } from 'react'
import { addToMatched, resetActive, resetGame, set5, setActive, setDisabled, undoActive } from '../reducers/match5Reducer'
import { useDispatch, useSelector } from 'react-redux'
import { PropTypes } from 'prop-types'
import functions from '../utilities/functions'
import './Card.css'
import MatchCard from './MatchCard'
import { updateScore } from '../reducers/userReducer'
import { Box, Button, CardBody, Card as CardUI, Center, Flex, Heading, Text } from '@chakra-ui/react'
import Loading from './Loading'
import { FaHandPointDown } from 'react-icons/fa'
import StartScreen from './InactiveScreen'

const Match5 = ({ cards }) => {

  const activeCards = useSelector((state) => state.match5)
  const user = useSelector((state) => state.user)
  const [match, setMatch] = useState([])
  const [gameActive, setGameActive] = useState(false)

  const dispatch = useDispatch()

  //get 5 cards to be used from parent card state
  const triggerStart = () => {
    const cardsToUse = functions.getRandomCards([...cards.all], 5)
    // set5 also adds disabled attribute to the cards
    dispatch(set5(cardsToUse))
  }

  const matchHandler = (card, event) => {
    if(match[0]) {
      // **************************************RETURN TO THIS
      // if(match[0] === event.target.value){
      //   console.log('here')
      //   setMatch([])
      //   dispatch(undoActive(event.target.value))
      //   return
      // }
      // **************************************RETURN TO THIS
      setMatch([...match, event.target.name])
      if((match[0] === card.bg && event.target.value === card.en || match[0] === card.en && event.target.value === card.bg)){
        console.log('correct')
        // setCorrect('green')
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
        return
      }
      console.log('incorrect')
      return
    }
    setMatch([event.target.value])
    dispatch(setActive(event.target.value))
  }

  const startHandler = () => {
    dispatch(resetGame())
    triggerStart()
    setMatch([])
    setGameActive(true)
  }

  // win state
  if (activeCards.matched.length === 5){
    return (
      <StartScreen startHandler={startHandler} gameActive={false} mainText={'Congrats! All Matched'} buttonText={'Restart!'}/>
    )
  }

  return(
    <Box flex={1}>
      {cards.all[0]
        ?
        <StartScreen startHandler={startHandler} gameActive={gameActive} mainText={'Are you ready?'} buttonText={'Start!'}/>
        :
        <Loading />
      }
      {gameActive
        ?
        <Box mt={10} mb={10}>
          <Heading as={'h1'} textAlign={'center'}>Match the words on each side</Heading>
          <Box
            // className='match-box'
            display={'flex'}
            justifyContent={'space-between'}
            //
          >
            <Box
              id='bg-container'
              pl={{ base: 1, md: 10 }}
            >
              {activeCards.bg.length !== 0
                ?
                activeCards.bg.map((c) => {
                  return(<MatchCard card={c} key={`${c.bg}-bg`} matchHandler={matchHandler} disabled={c.disabled} matched={c.matched} />)
                })
                : null}
            </Box>
            <Box
              id='en-container'
              pr={{ base: 1, md: 10 }}
            >
              {activeCards.en.length !== 0
                ?
                activeCards.en.map((c) => {
                  return(<MatchCard card={c} en={true} key={`${c.en}-en`} matchHandler={matchHandler} disabled={c.disabled} matched={c.matched} />)
                })
                : null}
            </Box>
          </Box>
        </Box>
        : null
      }
    </Box>
  )
}

Match5.propTypes = {
  cards: PropTypes.object.isRequired,
}

export default Match5