import {
  Box,
  Card,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { FaHandPointDown } from 'react-icons/fa'
import loginImage from '../assets/misc_images/login.png'
import Login from './LoginForm'
import RegForm from './RegForm'


const LoginPage = () => {

  const primaryColor = useColorModeValue('red.400', 'yellow.400')
  const textShadowColor = useColorModeValue('1px 1px 1px brown', '1px 1px 3px black')
  const buttonColor = useColorModeValue('gray.800', 'yellow.400')
  const buttonText = useColorModeValue('yellow.400', 'gray.800')

  return(
    <Box flex={1} minH={'80vh'} >
      <Center
        flexDirection={{ base: 'column', sm: 'row' }}
        mt={5}
        alignItems={'center'}
        justifyContent={'space-evenly'}
      >

        <Stack pb={10}>
          <Center >
            <Image
              src={loginImage}
              alt='learning illustration'
              boxSize={{ base: 40, md: 80 }}
            />
          </Center>
          <Heading as={'h1'} textAlign={{ base: 'center', md: 'left' }} color={primaryColor} sx={{ textShadow: textShadowColor }} >Hey Stranger!</Heading>
          <Text textAlign={{ base: 'center', md: 'left' }}>Welcome to Flashcards, a simple platform to practise languages using flashcards</Text>
        </Stack>
        <Stack >
          <Center flexDirection={'column'} >
            <Flex dir='row' alignItems={{ base: 'center', md: 'row' }}>
              <Text pr={3}>Let&apos;s get started</Text>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FaHandPointDown display={{ base: 'none', md: 'flex' }} />
              </Box>
              <Box display={{ base: 'flex', md: 'none' }}>
                <FaHandPointDown  />
              </Box>
            </Flex>
          </Center>
          <Card
            m={5}
            mt={{ base: '20', md: '0' }}
            boxShadow={'1px 1px .5em black'}
            minW={{ base: '80%', md: '30%' }}
            minH={{ base: '80%', md: '40%' }}
          >
            <Tabs position="relative" variant="unstyled" >
              <TabList>
                <Tab>Login</Tab>
                <Tab>Register</Tab>
              </TabList>
              <TabIndicator
                mt="-1.5px"
                height="2px"
                bg={primaryColor}
                borderRadius="1px"
              />
              <TabPanels>
                <TabPanel>
                  <Login buttonColor={buttonColor} buttonText={buttonText} />
                </TabPanel>
                <TabPanel>
                  <RegForm buttonColor={buttonColor} buttonText={buttonText} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Card>
        </Stack>

      </Center>
    </Box>
  )

}

export default LoginPage