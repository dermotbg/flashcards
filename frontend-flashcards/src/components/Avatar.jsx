import { useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { createAvatar } from '@dicebear/core'
import { croodles as style } from '@dicebear/collection'
import ToggleVisible from './ToggleVisible'
import { HexColorPicker } from 'react-colorful'

const Avatar = ({ size }) => {

  const [color, setColor] = useState('#00FF00')
  const [topColor, setTopColor] = useState('#00FF00')

  // const variants = ['variant01', 'variant02', 'variant03', 'variant04', 'variant05', 'variant06', 'variant07',
  //   'variant08', 'variant09', 'variant10', 'variant11', 'variant12','variant13','variant14','variant15','variant16', 'variant17', 'variant18',]
  
  // define array of all availble variants of possible choices. Can be sliced later for limiting.
  const variants = Array.from({ length: 30 }, (_element, index) => `variant${String(index).padStart(2, '0')}`)
  // console.log(variants)

  // const avatar = useMemo(() => createAvatar(style, { size: 128 }).toDataUriSync(), [])
  const avatar = useMemo(() => {
    return createAvatar(style, {
      size: size ? size : 128,
      seed: 'Felix',
      // backgroundColor: [color],
      // baseColor: ['#000000'],
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

  const logger = (event) => {
    console.log(event)
  }

  return(
    <div>
      <img src={avatar} alt='Avatar' />
      {size ? null : 
        <ToggleVisible buttonLabel={'Create New Avatar'}>
          <div>
            <select name='seed'>
              <option>Pepper</option>
              <option>Abbey</option>
              <option>Garfield</option>
            </select>
          </div>
          <p>Flip?</p>
          <div>
            <input type='radio' id='flip' name='flip' value={true}/>
            <label htmlFor='flip'>Yes</label>
            <br />
            <input type='radio' id='noFlip' name='flip' value={false}/>
            <label htmlFor='noFlip'>No</label>
          </div>
          <div>
            <p>Background color</p>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
          <div>
            <p>X axis</p>
            <input type="range" name='xAxis' min={-50} max={50} />
          </div>
          <div>
            <p>Y axis</p>
            <input type="range" name='yAxis' min={-50} max={50} />
          </div>
          <div>
            <p>Beard</p>
            <div id='beardSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {variants.slice(1, 6).map((beard, index) => (
                <div key={beard}>
                  <input type='radio' id={`beard-${beard}`}  name='beard' value={beard} onChange={() => logger(beard)}/>
                  <label htmlFor={`beard-${beard}`}>{`beard #${index+1}`}</label>
                </div>
              )
              )}
            </div>
          </div>
          <div>
            <p>Eyes</p>
            <div id='eyesSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {variants.slice(1, 17).map((e, index) => (
                <div key={e}>
                  <input type='radio' id={`eyes-${e}`}  name='eyes' value={e} onChange={() => logger(e)}/>
                  <label htmlFor={`eyes-${e}`}>{`Eyes #${index+1}`}</label>
                </div>
              )
              )}
            </div>
          </div>
          <div>
            <p>Face</p>
            <div id='faceSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {variants.slice(1, 9).map((face, index) => (
                <div key={face}>
                  <input type='radio' id={`face-${face}`}  name='face' value={face} onChange={() => logger(face)}/>
                  <label htmlFor={`face-${face}`}>{`Face #${index+1}`}</label>
                </div>
              )
              )}
            </div>
          </div>
          <div>
            <p>Mouth</p>
            <div id='mouthSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {variants.slice(1, 19).map((mouth, index) => (
                <div key={mouth}>
                  <input type='radio' id={`mouth-${mouth}`}  name='mouth' value={mouth} onChange={() => logger(mouth)}/>
                  <label htmlFor={`mouth-${mouth}`}>{`Mouth #${index+1}`}</label>
                </div>
              )
              )}
            </div>
          </div>
          <div>
            <p>Moustache</p>
            <div id='moustacheSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {variants.slice(1, 5).map((moustache, index) => (
                <div key={moustache}>
                  <input type='radio' id={`moustache-${moustache}`}  name='moustache' value={moustache} onChange={() => logger(moustache)}/>
                  <label htmlFor={`moustache-${moustache}`}>{`Moustache #${index+1}`}</label>
                </div>
              )
              )}
            </div>
          </div>
          <div>
            <p>Nose</p>
            <div id='noseSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {variants.slice(1, 10).map((nose, index) => (
                <div key={nose}>
                  <input type='radio' id={`nose-${nose}`}  name='nose' value={nose} onChange={() => logger(nose)}/>
                  <label htmlFor={`nose-${nose}`}>{`nose #${index+1}`}</label>
                </div>
              )
              )}
            </div>
          </div>
          <div>
            <p>Top</p>
            <div id='topSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {variants.slice(1, 30).map((top, index) => (
                <div key={top}>
                  <input type='radio' id={`top-${top}`}  name='top' value={top} onChange={() => logger(top)}/>
                  <label htmlFor={`top-${top}`}>{`top #${index+1}`}</label>
                </div>
              )
              )}
            </div>
          </div>
          <div>
            <p>Top color</p>
            <HexColorPicker color={topColor} onChange={setTopColor} />
          </div>
        </ToggleVisible>
      }
    </div>
  )
}

Avatar.propTypes = {
  size: PropTypes.number
}

export default Avatar