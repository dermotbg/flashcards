import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { createAvatar } from '@dicebear/core'
import { croodles as style } from '@dicebear/collection'

const Avatar = ({ size }) => {
  // const avatar = useMemo(() => createAvatar(style, { size: 128 }).toDataUriSync(), [])
  const avatar = useMemo(() => {
    return createAvatar(style, {
      size: size ? size : 128,
      seed: 'Felix',
      // backgroundColor: ['b6e3f4','c0aede','d1d4f9'],
      // backgroundType: ['gradientLinear','solid'],
      // beard: ['variant01','variant02','variant03','variant04','variant05']
      beard: 'variant01',
      // mouth: 'variant02'

      //...
    }).toDataUriSync()
  }, [])

  //Seeds: Pepper - Abbey - Garfield - Mittens - Loki - Shadow - Samantha - Bubba - Charlie - Sadie - Snickers - Rascal
  //Seeds contd: Chester - Midnight - Buster - Pumpkin - Fleix - Lilly - Whiskers - Luna
  // https://www.dicebear.com/styles/croodles/

  // object will be created with avatar form component. 
  // saved to db in return for certain amount of points. 
  // app or home component will useMemo createAvatar from db information / options
  // mini avatar in the navbar and leaderboards

  return(
    <img src={avatar} alt='Avatar' />
  )
}

Avatar.propTypes = {
  size: PropTypes.number
}

export default Avatar