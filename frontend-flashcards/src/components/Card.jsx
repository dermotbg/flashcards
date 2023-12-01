import { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import ToggleVisible from './ToggleVisible'
import { useDispatch, useSelector } from 'react-redux'
import { updateScore } from '../reducers/userReducer'
import { rateCard } from '../reducers/cardReducer'

import { Card as CardUI, CardBody, Heading, Text, Button, Input, FormLabel, Box, Center, Stack, Divider, Flex } from '@chakra-ui/react'
import { FaThumbsDown, FaThumbsUp, FaUndo } from 'react-icons/fa'

const Card = ({ card }) => {

  const [correct, setCorrect] = useState('')
  const [answerChecked, setAnswerChecked] = useState(false)

  // const user = JSON.parse(window.localStorage.getItem('loggedInUser'))
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const checkAnswerRef = useRef()

  const checkAnswer = useCallback((event) => {
    event.preventDefault()

    console.log(card)

    const answer = card.bg.localeCompare(event.target.bg.value, 'bg', { sensitivity: 'base' })

    if(!answer){
      setCorrect('green')
      let updatedUser = user
      switch (card.difficulty) {
      case 'easy':
        updatedUser = { ...updatedUser, score: updatedUser.score + 1 }
        break
      case 'medium':
        updatedUser = { ...updatedUser, score: updatedUser.score + 2 }
        break
      case 'hard':
        updatedUser = { ...updatedUser, score: updatedUser.score + 3 }
        break
      default:
        break
      }
      dispatch(updateScore(updatedUser))
      setAnswerChecked(true)
    }

    else {setCorrect('red')}
    setTimeout(() => {
      setCorrect('')
    }, 5000)
  }, [card, dispatch, user])

  const showAnswer = () => {
    setAnswerChecked(true)
  }

  const undoRatingHandler = (card) => {
    const cardObj = { ...card }
    const index = card.ratedBy.findIndex(i => i.user === user.id)
    const rating = cardObj.ratedBy[index].rating
    cardObj.rating = rating === '+'
      ? card.rating - 1
      : card.rating + 1
    cardObj.ratedBy = card.ratedBy.filter((_, i) => i !== index) //reminder: 1st arg element, 2nd index.
    dispatch(rateCard(cardObj))
  }

  const ratingHandler = (card, event) => {
    const cardObj = { ...card }
    const rating = event.target.name === 'plus' ? '+' : '-'
    cardObj.rating = rating === '+'
      ? card.rating + 1
      : card.rating - 1
    cardObj.ratedBy = [...card.ratedBy, { user: user.id, rating: rating }]
    dispatch(rateCard(cardObj))
  }

  return(
    <Center>
      <form onSubmit={checkAnswer}>
        <CardUI
          className='answer'
          minW={'100%'}
          border={'solid 1px black'}
          boxShadow={'1px 1px .5em black'}
          style={{ backgroundColor: correct }}
          mb={6}
        >
          <Heading
            size='4xl'
            minW={'100%'}
          >
            {card.en}
          </Heading>
          <CardBody>
            <Stack dir='row' >
              <Text><em>In the context of {card.cat}</em></Text>
              <Divider borderColor={'black'}/>
              <Text pb={2} textAlign={'center'}>Card User Rating: {card.rating}</Text>
              {Array.isArray(card.ratedBy) && card.ratedBy.find(u  => u.user === user.id)
                ?
                <Flex dir='row' justifyContent={'center'}>
                  <Button type='button' colorScheme='red' size='sm' name='undo' onClick={() => undoRatingHandler(card)}>
                    <FaUndo />
                  </Button>
                </Flex>
                :
                <Flex dir='row' justifyContent={'center'}>
                  <Button
                    mr={3}
                    _hover={{
                      bg: 'brand.mainBlue',
                      color: 'brand.white'
                    }}
                    size='sm'
                    type='button'
                    name='plus'
                    onClick={(e) => ratingHandler(card, e)}
                  >
                    <FaThumbsUp />
                  </Button>
                  <Button
                    _hover={{
                      bg: 'brand.red',
                      color: 'brand.white'
                    }}
                    size='sm' type='button' name='minus' onClick={(e) => ratingHandler(card, e)} >
                    <FaThumbsDown />
                  </Button>
                </Flex>}
              <Divider borderColor={'black'} />
              {answerChecked
                ?
                <Center>
                  <Heading > {card.en} / {card.bg} </Heading>
                </Center>
                :
                <Box>
                  <Center className='answer-container'>
                    <FormLabel>Your Answer:</FormLabel>
                    <Input borderColor={'black'} mb={2} style={{ alignSelf: 'center' }}  width='100%' size='md' type="text" name="bg" />
                  </Center>
                  <Center>
                    <Flex justifyContent={'space-apart'}>
                      <Button mr={3} _hover={{ bg:'brand.mainBlue', color: 'brand.white' }} style={{ alignSelf: 'flex-end' }} type="submit">Check answer</Button>
                      <ToggleVisible buttonLabel={'Show answer'} ref={checkAnswerRef} onClick={showAnswer} buttonLabel2={'noCancel'}>
                      </ToggleVisible>
                    </Flex>
                  </Center>
                </Box>
              }
            </Stack>
          </CardBody>
        </CardUI>
      </form>
    </Center>
    // oldie card below:
    // <div>
    //   <form onSubmit={checkAnswer}>
    //     <div className='answer' style={{ backgroundColor: correct }} >
    //       {card.en}
    //       <div>
    //         <em>In the context of {card.cat}</em>
    //         <div>{card.rating}</div>
    //       </div>
    //       {Array.isArray(card.ratedBy) && card.ratedBy.find(u  => u.user === user.id)
    //         ? <button type='button' name='undo' onClick={() => undoRatingHandler(card)}> Undo rating </button>
    //         :
    //         <div>
    //           <button type='button' name='plus'  onClick={(e) => ratingHandler(card, e)}>rate card +</button>
    //           <button type='button' name='minus' onClick={(e) => ratingHandler(card, e)} >rate card -</button>
    //         </div>}
    //     </div>
    //     {answerChecked ? null : <div><input type="text" name="bg" /> <button type="submit">Check answer</button></div>}
    //   </form>
    //   <ToggleVisible buttonLabel={'show answer'} ref={checkAnswerRef} onClick={showAnswer} buttonLabel2={'noCancel'}>
    //     <p>{card.en} / {card.bg}</p>
    //   </ToggleVisible>
    // </div>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired
}

export default Card