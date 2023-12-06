import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Stack,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link as RouterLink } from 'react-router-dom'
import hangman from '../assets/hangman_images/hangman_1.png'
import flashcardPic from '../assets/misc_images/flashcard1.png'
import match5Pic from '../assets/misc_images/match5.png'
import { PropTypes } from 'prop-types'
import LoginPage from './LoginPage'

const Home = ({ login }) => {

  const headingColor = useColorModeValue('red.400', 'yellow.400')
  const buttonColor = useColorModeValue('white', 'gray.800')
  const buttonText = useColorModeValue('red.400', 'yellow.400')

  const hoverColor = useColorModeValue('red.400', 'yellow.400')
  const hoverText = useColorModeValue('white', 'gray.800')

  const textShadowColor = useColorModeValue('1px 1px 1px gray', '1px 1px 3px black')

  const boxShad = useColorModeValue('1px 1px .5em black','3px 3px .2em 1px black') // yellow: #ecc94b80


  if(!login) return <LoginPage buttonColor={buttonColor} buttonText={buttonText} hoverColor={hoverColor} hoverText={hoverText} />

  return(
    <Center flex={1}>
      <Stack alignItems={'center'}>
        <Box flexDirection={'column'} alignSelf={'start'} p={10}>
          <Heading
            as={'h1'}
            size={'2xl'}
            pb={5}
            sx={{ textShadow: textShadowColor }}
          >
              Welcome to your flashcards
            <Heading
              as={'h1'}
              size={'2xl'}
              color={headingColor}
              sx={{ textShadow: textShadowColor }}
            >
              {login.username}
            </Heading>
          </Heading>
          <Heading
            as={'h2'}
            size={'md'}
            fontWeight={'400'}
          >
            Below you can choose which game you want to practise with.
          </Heading>
        </Box>
        <Flex
          wrap={'wrap'}
          maxWidth={'75%'}
          justifyContent={'center'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Card
            margin={'5px'}
            variant={'outline'}
            border={'1px solid black'}
            boxShadow={boxShad}
            size={{ base: 'sm', md: 'md' }}
          >
            <CardHeader>
              <Flex
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                m={4}
              >
                <Heading
                  size='lg'
                  color={headingColor}
                  sx={{ textShadow: textShadowColor }}
                >
                  Random 10
                </Heading>
                <Image
                  boxSize={'100px'}
                  borderRadius={'full'}
                  src={flashcardPic}
                  // src='https://media.istockphoto.com/id/138033086/photo/blank-index-card-with-pen-on-laptop-computer.jpg?s=612x612&w=0&k=20&c=mQPF1x9RxaEORzoQPBesJc3xS4B1c_X4ybMoMsfyoMs='
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>Generate 10 random Flashcards to play with</Text>
            </CardBody>
            <CardFooter>
              <Button
                rightIcon={<ArrowForwardIcon />}
                as={RouterLink}
                to={'/random10'}
                bg={buttonColor}
                color={buttonText}
                _hover={{ bg: hoverColor, color: hoverText  }}
              >
              Take me there!</Button>
            </CardFooter>
          </Card>
          <Card
            variant={'outline'}
            margin={'5px'}
            border={'1px solid black'}
            boxShadow={boxShad}
            size={{ base: 'sm', md: 'md' }}
          >
            <CardHeader>
              <Flex
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
                m={4}
              >
                <Heading
                  size='lg'
                  color={headingColor}
                  sx={{ textShadow: textShadowColor }}
                >
                Match 5
                </Heading>
                <Image
                  boxSize={'100px'}
                  borderRadius={'full'}
                  src={match5Pic}
                  // src='https://media.istockphoto.com/id/1044123532/vector/alphabet-cubes-line-and-glyph-icon-abc-and-toy-block-sign-vector-graphics-a-linear-pattern.jpg?s=612x612&w=0&k=20&c=okyUQdoHtIXikWHuGhyhjR7-uysf6QoJeOH52Z0W7BU='
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text >Match the words with their translations</Text>
            </CardBody>
            <CardFooter>
              <Button
                rightIcon={<ArrowForwardIcon />}
                as={RouterLink}
                to={'/match5'}
                bg={buttonColor}
                color={buttonText}
                _hover={{ bg: hoverColor, color: hoverText  }}
              >
                Take me there!
              </Button>
            </CardFooter>
          </Card>
          <Card
            variant={'outline'}
            margin={'5px'}
            border={'1px solid black'}
            boxShadow={boxShad}
            size={{ base: 'sm', md: 'md' }}
          >
            <CardHeader>
              <Flex
                flexDirection={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Heading
                  size='lg'
                  color={headingColor}
                  sx={{ textShadow: textShadowColor }}
                >
                Hangman
                </Heading>
                <Image
                  boxSize={'100px'}
                  src={hangman}
                  // src='https://media.istockphoto.com/id/1196954772/vector/simple-illustration-of-hangman-game.jpg?s=612x612&w=0&k=20&c=Z_Sxdqu4i100u0qeSsVdX_M--VoXgPISK83gBJCf3LM='
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>Guess the word before it&apos;s too late!</Text>
            </CardBody>
            <CardFooter>
              <Button
                rightIcon={<ArrowForwardIcon />}
                as={RouterLink}
                to={'/hangman'}
                bg={buttonColor}
                color={buttonText}
                _hover={{ bg: hoverColor, color: hoverText  }}
              >
                Take me there!
              </Button>
            </CardFooter>
          </Card>
        </Flex>
      </Stack>
    </Center>
  )
}
export default Home

Home.propTypes = {
  login: PropTypes.object
}