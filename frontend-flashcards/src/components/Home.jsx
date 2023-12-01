import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Stack,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { FaHandPointRight } from "react-icons/fa"
import { Link as RouterLink } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Login from './LoginForm'
import RegForm from './RegForm'

const Home = ({ login }) => {

  if(!login){
    return(
      <Box flex={1}>
        <Center>
          {/* <Card
            borderRadius={'full'}
            mt={5}
          >
            <CardBody
              minWidth={'50vw'}
              borderRadius={'full'}
              bg={'brand.mainBlue'}
              color={'brand.orange'}
              border={'solid 1px black'}
              boxShadow={'1px 1px .5em black'}
            >
              <Center>
                <Heading as={'h1'} m={5} sx={{ textShadow: '1px 1px 3px black' }} >Hey Stranger!</Heading>
              </Center>
            </CardBody>
          </Card> */}
        </Center>
        <Center mt={5} alignItems={'start'}>
          <Stack>
            <Card
              borderRadius={'full'}
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
                  <Heading as={'h1'} m={5} sx={{ textShadow: '1px 1px 3px black' }} >Hey Stranger!</Heading>
                  <Flex dir='row' alignItems={'center'}>
                    <Text pr={3}>Login or Register here</Text>
                    <FaHandPointRight />
                  </Flex>
                </Center>
              </CardBody>
            </Card>
            <Image
              src='https://media.istockphoto.com/id/1308793903/vector/students-reading-textbook-writing-down-in-notebook.jpg?s=612x612&w=0&k=20&c=SE5U6UPNMykX6B9mbiR4E1lyJTrEJJuHuWcf9Sf-ATE='
              alt='learning illustration'
              boxSize={80}
            />
          </Stack>
          {/* <Card
            m={5}
            bg={'brand.white'}
            boxShadow={'1px 1px .5em black'}
            maxW={'40%'}
          >
            <CardBody>
              <Text p={4}>Welcome! You can Login or Register on the form to the right.</Text>
              <Divider />
              <Text p={4}>All we take is a username and password to record your score etc, no other data is taken.</Text>
            </CardBody>
          </Card> */}
          <Card
            m={5}
            boxShadow={'1px 1px .5em black'}
            maxW={'40%'}
            maxH={'40%'}
          >
            <Tabs position="relative" variant="unstyled">
              <TabList>
                <Tab>Login</Tab>
                <Tab>Register</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg="blue.500"
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <Login />
                </TabPanel>
                <TabPanel>
                  <RegForm />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Card>
        </Center>
      </Box>

    )
  }

  return(
    <Center flex={1}>
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

Home.propTypes = {
  login: PropTypes.object
}