import { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './Card.css'
import { useDispatch, useSelector } from 'react-redux'
import { updateScore } from '../reducers/userReducer'
import { rateCard } from '../reducers/cardReducer'

import { Card as CardUI, CardBody, Heading, Text, Button, Input, FormLabel, Box, Center, Stack, Divider, Flex } from '@chakra-ui/react'
import { FaThumbsDown, FaThumbsUp, FaUndo } from 'react-icons/fa'
import functions from '../utilities/functions'

const Card = ({ card, active }) => {

  const [correct, setCorrect] = useState('')
  const [answerChecked, setAnswerChecked] = useState(false)

  // const user = JSON.parse(window.localStorage.getItem('loggedInUser'))
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    setAnswerChecked(false)
  },[card.bg])

  const checkAnswer = useCallback((event) => {
    event.preventDefault()
    console.log(card)
    const answer = card.bg.localeCompare(event.target.bg.value, 'bg', { sensitivity: 'base' })
    if(!answer){
      setCorrect('green')
      const updatedUser = functions.addScore(user, card)
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
    console.log(event)
    const rating = event.target.name === 'plus' ? '+' : '-'
    cardObj.rating = rating === '+'
      ? card.rating + 1
      : card.rating - 1
    cardObj.ratedBy = [...card.ratedBy, { user: user.id, rating: rating }]
    dispatch(rateCard(cardObj))
  }

  return(
    <Center style={active}>
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
                      <Button _hover={{ bg:'brand.mainBlue', color: 'brand.white' }} onClick={showAnswer}>Show answer</Button>
                    </Flex>
                  </Center>
                </Box>
              }
            </Stack>
          </CardBody>
        </CardUI>
      </form>
    </Center>
  )
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  active: PropTypes.object.isRequired
}

export default Card