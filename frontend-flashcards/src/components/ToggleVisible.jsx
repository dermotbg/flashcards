import PropTypes from 'prop-types'
import { useState, forwardRef, useImperativeHandle } from 'react'

const ToggleVisible = forwardRef((props, refs) => {
  const [visible, setVisible] = useState(false)

  const hiddenWhileTrue = { display: visible ? 'none' : '' }
  const shownWhileTrue = { display: visible ? '' : 'none' }

  const toggleVisible = () => {
    setVisible(!visible)
  }

  useImperativeHandle(refs, () => {
    return {
      toggleVisible
    }
  })


  return(
    <div>
      <div style={hiddenWhileTrue}>
        <button onClick={ () => { toggleVisible(); props.onClick() }}>{props.buttonLabel}</button>
      </div>
      <div style={shownWhileTrue}>
        {props.children}
      </div>
    </div>
  )
})

ToggleVisible.displayName = 'ToggVisible'
ToggleVisible.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

export default ToggleVisible