import { PropTypes } from 'prop-types'
import { Box, Button, CardBody, Card as CardUI, Center, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { FaHandPointDown } from 'react-icons/fa'

const StartScreen = ({ gameActive, startHandler, mainText, buttonText }) => {

  if (gameActive) return null

  return(
    <Box >
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
                <Heading as={'h1'} m={5} sx={{ textShadow: '1px 1px 3px black' }} >{mainText}</Heading>
                <Flex dir='row' alignItems={'center'}>
                  <Text pr={3}>{buttonText}</Text>
                  <FaHandPointDown />
                </Flex>
              </Center>
            </CardBody>
          </CardUI>
          <Center mt={10} mb={20}>
            <Button
              mt={10}
              mb={10}
              minWidth={'50vw'}
              minHeight={'10vw'}
              borderRadius={'full'}
              bg={'brand.mainBlue'}
              color={'brand.orange'}
              border={'solid 1px black'}
              boxShadow={'1px 1px .5em black'}
              onClick={() => startHandler()} >Start!
            </Button>
          </Center>
        </Stack>
      </Center>
    </Box>
  )
}

export default StartScreen

StartScreen.propTypes = {
  gameActive: PropTypes.bool.isRequired,
  startHandler: PropTypes.func.isRequired,
  mainText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
}
