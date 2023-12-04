import {
  Box,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
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
import { FaHandPointDown, FaHandPointRight } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Login from './LoginForm'
import RegForm from './RegForm'

const Home = ({ login }) => {

  if(!login){
    return(
      <Box flex={1} minH={'80vh'} >
        <Center
          flexDirection={{ base: 'column', sm: 'row' }}
          mt={5}
          alignItems={'center'}
          justifyContent={'space-evenly'}
        >

          <Stack >
            <Card
              borderRadius={'full'}
            >
              <CardBody
                minWidth={{ base: '80vw', md: '10vw' }}
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
                    <Box display={{ base: 'none', md: 'flex' }}>
                      <FaHandPointRight display={{ base: 'none', md: 'flex' }} />
                    </Box>
                    <Box display={{ base: 'flex', md: 'none' }}>
                      <FaHandPointDown  />
                    </Box>
                  </Flex>
                </Center>
              </CardBody>
            </Card>
            <Box display={{ base: 'none', md: 'flex' }}>
              <Image
                src='https://media.istockphoto.com/id/1308793903/vector/students-reading-textbook-writing-down-in-notebook.jpg?s=612x612&w=0&k=20&c=SE5U6UPNMykX6B9mbiR4E1lyJTrEJJuHuWcf9Sf-ATE='
                alt='learning illustration'
                boxSize={80}
              />
            </Box>
          </Stack>

          <Card
            m={5}
            mt={{ base: '20', md: '0' }}
            boxShadow={'1px 1px .5em black'}
            minW={{ base: '80%', md: '30%' }}
            minH={{ base: '80%', md: '40%' }}
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