import { useMemo } from 'react'
import PropTypes from 'prop-types'
import { createAvatar } from '@dicebear/core'
import { croodles as style } from '@dicebear/collection'
import ToggleVisible from './ToggleVisible'
import { useDispatch, useSelector } from 'react-redux'
import { saveAvatar, setSomething } from '../reducers/avatarReducer'

const Avatar = ({ size }) => {

  const avatar = useSelector(state => state.avatar)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  // define array of all availble variants of possible choices. Can be sliced later for limiting.
  const variants = Array.from({ length: 30 }, (_element, index) => `variant${String(index).padStart(2, '0')}`)
  const seeds = [ 'Pepper', 'Abbey', 'Garfield', 'Mittens', 'Loki', 'Shadow', 'Samantha', 'Bubba', 'Charlie', 'Sadie', 'Snickers', 'Rascal',
    'Chester', 'Midnight', 'Buster', 'Pumpkin', 'Fleix', 'Lilly', 'Whiskers', 'Luna' ]

  const newAvatar = useMemo(() => {
    return createAvatar(style, {
      size: size ? size : 128,
      seed: avatar.seed,
      flip: avatar.flip,
      face: avatar.face,
      translateX: avatar.xAxis,
      translateY: avatar.yAxis,
      beard: avatar.beard,
      eyes: avatar.eyes,
      mouth: avatar.mouth,
      moustache: avatar.moustache,
      nose: avatar.nose,
      top: avatar.top,
    }).toDataUriSync()
  }, [avatar])

  const changeHandler = (event) => {
    const key = event.target.name
    // separate array values from non arrays
    if (key === 'seed' || key === 'flip' || key === 'translateX' || key === 'translateY'){
      const value = event.target.value
      dispatch(setSomething({ [key]: value }))
      return
    }
    const value = [event.target.value]
    dispatch(setSomething({ [key]: value }))
  }

  const submitHandler = () => {
    // send newAvatar to db
    const avatarObj = {
      seed: avatar.seed,
      flip: avatar.flip,
      face: avatar.face,
      translateX: avatar.xAxis,
      translateY: avatar.yAxis,
      beard: avatar.beard,
      eyes: avatar.eyes,
      mouth: avatar.mouth,
      moustache: avatar.moustache,
      nose: avatar.nose,
      top: avatar.top,
      user: user.id
    }
    dispatch(saveAvatar(avatarObj))
  }

  return(
    <div>
      <img src={newAvatar} alt='Avatar' />
      <div id='avatar-container' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {size ? null :
          <ToggleVisible buttonLabel={'Create New Avatar'} buttonLabel2={'Cancel New Avatar'}>
            <div>
              <select name='seed' onChange={changeHandler} defaultValue={'default'}>
                <option value='default' disabled={true}>Please select a seed</option>
                {seeds.map((seed) => <option key={seed} value={seed}>{seed}</option>) }
              </select>
            </div>
            <ToggleVisible buttonLabel={'flip'} buttonLabel2={'back'}>
              <p>Flip?</p>
              <div>
                <input type='radio' id='flip' name='flip' value={true} onChange={changeHandler}/>
                <label htmlFor='flip'>Yes</label>
                <br />
                <input type='radio' id='noFlip' name='flip' value={false} onChange={changeHandler}/>
                <label htmlFor='noFlip'>No</label>
              </div>
            </ToggleVisible>
            <ToggleVisible buttonLabel={'Axis'} buttonLabel2={'back'}>
              <div>
                <p>X axis</p>
                <input type="range" name='xAxis' min={-50} max={50} onChange={changeHandler}/>
              </div>
              <div>
                <p>Y axis</p>
                <input type="range" name='yAxis' min={-50} max={50} onChange={changeHandler} />
              </div>
            </ToggleVisible>
            <ToggleVisible buttonLabel={'Beard'} buttonLabel2={'back'}>
              <div>
                <p>Beard</p>
                <div id='beardSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  {variants.slice(1, 6).map((beard, index) => (
                    <div key={beard}>
                      <input type='radio' id={`beard-${beard}`}  name='beard' value={beard} onChange={changeHandler}/>
                      <label htmlFor={`beard-${beard}`}>{`beard #${index+1}`}</label>
                    </div>
                  )
                  )}
                </div>
              </div>
            </ToggleVisible>
            <ToggleVisible buttonLabel={'Eyes'} buttonLabel2={'back'}>
              <div>
                <p>Eyes</p>
                <div id='eyesSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  {variants.slice(1, 17).map((e, index) => (
                    <div key={e}>
                      <input type='radio' id={`eyes-${e}`}  name='eyes' value={e} onChange={changeHandler}/>
                      <label htmlFor={`eyes-${e}`}>{`Eyes #${index+1}`}</label>
                    </div>
                  )
                  )}
                </div>
              </div>
            </ToggleVisible>
            <ToggleVisible buttonLabel={'Face'} buttonLabel2={'back'}>
              <div>
                <p>Face</p>
                <div id='faceSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  {variants.slice(1, 9).map((face, index) => (
                    <div key={face}>
                      <input type='radio' id={`face-${face}`}  name='face' value={face} onChange={changeHandler}/>
                      <label htmlFor={`face-${face}`}>{`Face #${index+1}`}</label>
                    </div>
                  )
                  )}
                </div>
              </div>
            </ToggleVisible>
            <ToggleVisible buttonLabel={'Mouth'} buttonLabel2={'back'}>
              <div>
                <p>Mouth</p>
                <div id='mouthSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  {variants.slice(1, 19).map((mouth, index) => (
                    <div key={mouth}>
                      <input type='radio' id={`mouth-${mouth}`}  name='mouth' value={mouth} onChange={changeHandler}/>
                      <label htmlFor={`mouth-${mouth}`}>{`Mouth #${index+1}`}</label>
                    </div>
                  )
                  )}
                </div>
              </div>
            </ToggleVisible>
            <ToggleVisible buttonLabel={'Moustache'} buttonLabel2={'back'}>
              <div>
                <p>Moustache</p>
                <div id='moustacheSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  {variants.slice(1, 5).map((moustache, index) => (
                    <div key={moustache}>
                      <input type='radio' id={`moustache-${moustache}`}  name='moustache' value={moustache} onChange={changeHandler}/>
                      <label htmlFor={`moustache-${moustache}`}>{`Moustache #${index+1}`}</label>
                    </div>
                  )
                  )}
                </div>
              </div>
            </ToggleVisible>
            <ToggleVisible buttonLabel={'Nose'} buttonLabel2={'back'}>
              <div>
                <p>Nose</p>
                <div id='noseSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  {variants.slice(1, 10).map((nose, index) => (
                    <div key={nose}>
                      <input type='radio' id={`nose-${nose}`}  name='nose' value={nose} onChange={changeHandler}/>
                      <label htmlFor={`nose-${nose}`}>{`nose #${index+1}`}</label>
                    </div>
                  )
                  )}
                </div>
              </div>
            </ToggleVisible>
            <ToggleVisible buttonLabel={'Top'} buttonLabel2={'back'}>
              <div>
                <p>Top</p>
                <div id='topSelector' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                  {variants.slice(1, 30).map((top, index) => (
                    <div key={top}>
                      <input type='radio' id={`top-${top}`}  name='top' value={top} onChange={changeHandler}/>
                      <label htmlFor={`top-${top}`}>{`top #${index+1}`}</label>
                    </div>
                  )
                  )}
                </div>
              </div>
            </ToggleVisible>
            <button onClick={submitHandler}>save</button>
          </ToggleVisible>
        }
      </div>
    </div>
  )
}

Avatar.propTypes = {
  size: PropTypes.number
}

export default Avatar