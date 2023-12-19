import { Box, Center, Flex, Heading, Image, Stack, useColorModeValue } from '@chakra-ui/react'
import Avatar from './Avatar'
import { useEffect, useState } from 'react'
import { getRandomAvatars } from '../reducers/avatarReducer'
import { croodles as style } from '@dicebear/collection'
import Loading from './Loading'
import { createAvatar } from '@dicebear/core'


const AvatarRoute = () => {

  const [randomAvatars, setRandomAvatars] = useState([])
  const textShadowColor = useColorModeValue('1px 1px 1px gray', '1px 1px 3px black')


  useEffect(() => {
    return async () => {
      const getAvs = await getRandomAvatars()
      const avArray = []
      for (let av of getAvs){
        console.log(av)
        if (av.face[0] === ''){
          const blank = 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
          avArray.push(blank)
        }
        const avToAdd = createAvatar(style, av).toDataUriSync()
        avArray.push(avToAdd)
      }
      console.log(avArray)
      setRandomAvatars(avArray)
    }
  },[])

  return(
    <Box minH={'70vh'}>
      <Heading as={'h1'}
        p={10}
        size={'md'}
        pb={5}
        sx={{ textShadow: textShadowColor }}> Check out some recently made Avatars from the community:
      </Heading>
      {randomAvatars
        ?
        <Flex dir='row' alignItems={'center'} justifyContent={'space-evenly'}>
          <Image src={randomAvatars[0]} alt='Other User Avatar 1' borderRadius={'full'} boxSize={100}/>
          <Image src={randomAvatars[1]} alt='Other User Avatar 2' borderRadius={'full'} boxSize={100}/>
          <Image src={randomAvatars[2]} alt='Other User Avatar 3' borderRadius={'full'} boxSize={100}/>
        </Flex>
        :
        <Loading/>
      }
      <Center pt={10}>
        <Stack>
          <Heading textAlign={'center'}>Create your new avatar here:</Heading>
          <Avatar />
        </Stack>
      </Center>

    </Box>
  )

}

export default AvatarRoute