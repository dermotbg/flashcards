import { PropTypes } from 'prop-types'
import { Box, Button, Center, Heading, Image, Stack, useColorModeValue } from '@chakra-ui/react'
import startScreen from '../assets/misc_images/start_screen.png'

const StartScreen = ({ gameActive, startHandler, mainText, buttonText }) => {

  const primaryColor = useColorModeValue('red.400', 'yellow.400')
  const textShadowColor = useColorModeValue('1px 1px 1px brown', '1px 1px 3px black')
  const buttonColor = useColorModeValue('white', 'gray.800')
  const buttonTextColor = useColorModeValue('red.400', 'yellow.400')
  const hoverColor = useColorModeValue('red.400', 'yellow.400')
  const hoverText = useColorModeValue('white', 'gray.800')

  if (gameActive) return null

  return(
    <Box >
      <Center>
        <Stack>
          <Center flexDirection={'column'}>
            <Heading
              as={'h1'}
              textAlign={{ base: 'center', md: 'left' }}
              color={primaryColor}
              sx={{ textShadow: textShadowColor }}
            >
              {mainText}
            </Heading>
            <Image
              src={startScreen}
            />
          </Center>
          <Center mt={0} mb={20}>
            <Button
              mt={0}
              mb={10}
              border={'solid 1px black'}
              boxShadow={'1px 1px .5em black'}
              bg={buttonColor}
              color={buttonTextColor}
              _hover={{ bg: hoverColor, color: hoverText  }}
              onClick={() => startHandler()}
            >
              {buttonText}
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
