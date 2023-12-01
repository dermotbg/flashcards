import { setSelected } from '../reducers/cardReducer'
import { useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types'
import functions from '../utilities/functions'

import { Box, Card as CardUI, CardBody, Center, Flex, Heading, Stack, Text, Button } from '@chakra-ui/react'
import { FaHandPointDown } from 'react-icons/fa'
import Carousel from './Carousel'
import Loading from './Loading'
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
        <Center>
          <Stack>
            {gameActive
              ? null
              :
              <CardUI
                borderRadius={'full'}
                mt={10}
              >
                <CardBody
                  minWidth={'10vw'}
                  borderRadius={'full'}
                  bg={'brand.mainBlue'}
                  color={'brand.orange'}
                  border={'solid 1px black'}
                  boxShadow={'1px 1px .5em black'}
                >
                  <Center flexDirection={'column'}>
                    <Heading as={'h1'} m={5} sx={{ textShadow: '1px 1px 3px black' }} >Are you ready?</Heading>
                    <Flex dir='row' alignItems={'center'}>
                      <Text pr={3}>When you&apos;re ready, hit start!</Text>
                      <FaHandPointDown />
                    </Flex>
                  </Center>
                </CardBody>
              </CardUI>
            }
            {gameActive
              ?
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
              :
              <Button
                mt={10}
                mb={10}
                minWidth={'10vw'}
                borderRadius={'full'}
                bg={'brand.mainBlue'}
                color={'brand.orange'}
                border={'solid 1px black'}
                boxShadow={'1px 1px .5em black'}
                onClick={() => triggerStart()} >Start!
              </Button>
            }
          </Stack>
        </Center>
        :
        <Loading />
      }
      <Box>
        <Carousel cards={cards.selected} reset={gameActive}/>
      </Box>
    </Box>
  )
}

Random10.propTypes = {
  cards: PropTypes.object.isRequired
}

export default Random10