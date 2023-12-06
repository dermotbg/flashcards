import {
  Box,
  chakra,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { PropTypes } from 'prop-types'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { SiChakraui } from 'react-icons/si'

const SocialButton = ({
  children,
  label,
  href,
}) => {
  const hoverColor = useColorModeValue('yellow.400', 'red.400')
  return (
    <chakra.button
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'color 0.3s ease'}
      _hover={{
        bg: !hoverColor,
        color: hoverColor
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const Footer = () =>  {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.800')}
      color={useColorModeValue('red.400', 'yellow.200')}
      // bg={'brand.mainBlue'}
      // color={'brand.white'}
      mt={8}
      boxShadow={useColorModeValue('0em .01em .3em gray','0em .01em .3em black' )}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        // direction={{ base: 'column', md: 'row' }}
        direction='row'
        spacing={4}
        justify={{ base: 'space-between', md: 'space-between' }}
        // align={{ base: 'start', md: 'start' }}>
        align={'start'}>
        <Stack direction={'column'}>
          <Text
            color='brand.orange'
            fontWeight={900}
            size={'md'}
            // sx={{ textShadow: '1px 1px 3px black' }}
          >© 2023 dermotbg</Text>
          {/* <Flex direction={'row'} alignItems={'center'}>
            <Text pr={12}>UI Created using Chakra</Text>
            <SocialButton label={'ChakraUI'} href={'https://chakra-ui.com/'}>
              <SiChakraui />
            </SocialButton>
          </Flex>
          <Flex direction={'row'} alignItems={'center'}>
            <Text pr={3}>With help from Chakra-Templates </Text>
            <SocialButton label={'Chakra-Templates'} href={'https://chakra-templates.dev/'}>
              <SiChakraui />
            </SocialButton>
          </Flex> */}
        </Stack>

        <Stack direction={'column'}>
          <Text
            color='brand.orange'
            fontWeight={900}
            size={'md'}
            // sx={{ textShadow: '1px 1px 3px black' }}
          >Jump To:</Text>
          <Text as={'a'} _hover={{ textDecoration: 'underline' }} href='/'>Home</Text>
          <Text as={'a'} _hover={{ textDecoration: 'underline' }} href='/leaderboards'>Leaderboards</Text>
        </Stack>

        <Stack direction={'column'} alignItems={'end'} spacing={1}>
          <Text
            color='brand.orange'
            fontWeight={900}
            as={'h6'}
            size={'md'}
            // sx={{ textShadow: '1px 1px 3px black' }}
          >Reach out:</Text>
          <Flex direction={'row'} alignItems={'center'} justifyContent={'end'}>
            <Text>Github</Text>
            <SocialButton label={'Github'} href={'https://www.github.com/dermotbg'}>
              <FaGithub />
            </SocialButton>
          </Flex>
          <Flex direction={'row'} alignItems={'center'} justifyContent={'end'}>
            <Text>LinkedIn</Text>
            <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/dermot-bateman-7139971a2'}>
              <FaLinkedin />
            </SocialButton>
          </Flex>
        </Stack>
      </Container>
    </Box>
  )
}

SocialButton.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default Footer