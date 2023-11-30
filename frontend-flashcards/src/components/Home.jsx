import { Card, CardHeader, Heading, CardBody, CardFooter, Text, Button, Flex, Center, Image } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'

const Home = () => {
  return(
    <Center>
      <Flex
        wrap={'wrap'}
        maxWidth={'75%'}
        justifyContent={'center'}
      >
        <Card
          margin={'5px'}
          variant={'outline'}
        >
          <CardHeader>
            <Flex
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              m={4}
            >
              <Heading size='lg'> Random 10</Heading>
              <Image
                boxSize={'100px'}
                borderRadius={'full'}
                src='https://media.istockphoto.com/id/138033086/photo/blank-index-card-with-pen-on-laptop-computer.jpg?s=612x612&w=0&k=20&c=mQPF1x9RxaEORzoQPBesJc3xS4B1c_X4ybMoMsfyoMs='
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>Generate 10 random Flashcards to play with</Text>
          </CardBody>
          <CardFooter>
            <Button rightIcon={<ArrowForwardIcon />} as={RouterLink} to={'/random10'}>Take me there!</Button>
          </CardFooter>
        </Card>
        <Card
          variant={'outline'}
          margin={'5px'}
        >
          <CardHeader>
            <Flex
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              m={4}
            >
              <Heading size='lg'> Match 5</Heading>
              <Image
                boxSize={'100px'}
                borderRadius={'full'}
                src='https://media.istockphoto.com/id/1044123532/vector/alphabet-cubes-line-and-glyph-icon-abc-and-toy-block-sign-vector-graphics-a-linear-pattern.jpg?s=612x612&w=0&k=20&c=okyUQdoHtIXikWHuGhyhjR7-uysf6QoJeOH52Z0W7BU='
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>Match the words with their translations</Text>
          </CardBody>
          <CardFooter>
            <Button rightIcon={<ArrowForwardIcon />} as={RouterLink} to={'/match5'}>Take me there!</Button>
          </CardFooter>
        </Card>
        <Card
          variant={'outline'}
          margin={'5px'}
        >
          <CardHeader>
            <Flex
              flexDirection={'row'}
              alignItems={'center'}
              justifyContent={'space-between'}
              m={4}
            >
              <Heading size='lg'> Hangman </Heading>
              <Image
                boxSize={'100px'}
                src='https://media.istockphoto.com/id/1196954772/vector/simple-illustration-of-hangman-game.jpg?s=612x612&w=0&k=20&c=Z_Sxdqu4i100u0qeSsVdX_M--VoXgPISK83gBJCf3LM='
              />
            </Flex>
          </CardHeader>
          <CardBody>
            <Text>Guess the word before it&apos;s too late!</Text>
          </CardBody>
          <CardFooter>
            <Button rightIcon={<ArrowForwardIcon />} as={RouterLink} to={'/hangman'}>Take me there!</Button>
          </CardFooter>
        </Card>
      </Flex>
    </Center>
  )
}
export default Home