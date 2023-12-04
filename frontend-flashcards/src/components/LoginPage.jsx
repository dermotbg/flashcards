import {
  Box,
  Card,
  CardBody,
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
  Text
} from '@chakra-ui/react'
import { FaHandPointDown, FaHandPointRight } from 'react-icons/fa'
import Login from './LoginForm'
import RegForm from './RegForm'


const LoginPage = () => {

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

export default LoginPage