import { Box, Button, Flex } from '@chakra-ui/react'
import { PropTypes } from 'prop-types'
import { FaCheckCircle } from 'react-icons/fa'

const MatchCard = ({ card, en, matchHandler, disabled, matched }) => {

  const disabledColor = {
    bg: 'white',
    color: '#7070FF',
  }

  return(
    <Box >
      <Box mt={8} mb={8} >
        {en
          ?
          <Flex
            key={`${card.en}-en`}
            justifyContent={'end'}
          >
            {disabled
              ?
              matched ? <FaCheckCircle size={40} color={'green'}/> : <Button style={disabledColor} isDisabled>{card.en}</Button>
              :
              <Button
                id={`${card.en}-en`}
                name={'en'}
                value={card.en}
                isDisabled={disabled}
                onClick={(event) => matchHandler(card, event)}
                bg={'white'}
                color={'brand.lightBlue'}
                _hover={{
                  bg: 'brand.mainBlue',
                  color: 'brand.orange'
                }}
              >
                {card.en}
              </Button>
            }
          </Flex>
          :
          <Flex
            key={`${card.bg}-bg`}
          >
            {disabled
              ?
              matched ? <FaCheckCircle size={40} color={'green'}/> : <Button style={disabledColor} isDisabled>{card.bg}</Button>
              :
              <Button
                id={`${card.bg}-bg`}
                name={'bg'}
                value={card.bg}
                isDisabled={disabled}
                onClick={(event) => matchHandler(card, event)}
                bg={'white'}
                color={'brand.lightBlue'}
                _hover={{
                  bg: 'brand.mainBlue',
                  color: 'brand.orange'
                }}
              >
                {card.bg}
              </Button>
            }
          </Flex> }
      </Box>
    </Box>
  )
}

MatchCard.propTypes = {
  card: PropTypes.object.isRequired,
  matchHandler: PropTypes.func.isRequired,
  en: PropTypes.bool, //this is just to print it in the right hand div
  disabled: PropTypes.bool,
  matched: PropTypes.bool
}

export default MatchCard