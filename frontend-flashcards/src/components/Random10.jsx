import { setSelected } from '../reducers/cardReducer'
import { useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types'
import functions from '../utilities/functions'

import Card from './Card'
import { Box, Card as CardUI, CardBody, Center, Flex, Heading, Stack, Text, Image, Button } from '@chakra-ui/react'
import { FaHandPointDown } from 'react-icons/fa'
import Carousel from './Carousel'
import Loading from './Loading'

const Random10 = ({ cards }) => {

  const dispatch = useDispatch()

  const triggerStart = () => {
    dispatch(setSelected(functions.getRandomCards([...cards.all], 10)))
  }

  return(
    <Box flex={1}>
      {cards.all[0]
        ?
        <Center>
          <Stack>
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
            {/* <Image
              src='https://media.istockphoto.com/id/1308793903/vector/students-reading-textbook-writing-down-in-notebook.jpg?s=612x612&w=0&k=20&c=SE5U6UPNMykX6B9mbiR4E1lyJTrEJJuHuWcf9Sf-ATE='
              alt='learning illustration'
              boxSize={80}
            /> */}
            {/* {!cards.selected
              ?
              <Button
                isLoading
                mt={10}
                mb={10}
                minWidth={'10vw'}
                borderRadius={'full'}
                bg={'brand.mainBlue'}
                color={'brand.orange'}
                border={'solid 1px black'}
                boxShadow={'1px 1px .5em black'}
                onClick={() => triggerStart()} >Give me 10 random cards!</Button>
              : */}
            <Button
              mt={10}
              mb={10}
              minWidth={'10vw'}
              borderRadius={'full'}
              bg={'brand.mainBlue'}
              color={'brand.orange'}
              border={'solid 1px black'}
              boxShadow={'1px 1px .5em black'}
              onClick={() => triggerStart()} >Give me 10 random cards!</Button>
            {/* } */}
          </Stack>
        </Center>
        :
        // <div>Loading...</div>
        <Loading />
      }
      <div>
        <Carousel cards={cards.selected}/>
        {/* {cards.selected.length !== 0 ? cards.selected.map(c => {
          return <Card key={c.id} card={c}/>
        }): null} */}
      </div>
    </Box>
  )
}

Random10.propTypes = {
  cards: PropTypes.object.isRequired
}

export default Random10