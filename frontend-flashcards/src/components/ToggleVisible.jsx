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

  // if 'noCancel' is passed in as buttonLanel2 prop the back button will not be shown.
  return(
    <div>
      <div style={hiddenWhileTrue}>
        <button onClick={ () => { toggleVisible(); props.onClick() }}>{props.buttonLabel}</button>
      </div>
      <div style={shownWhileTrue}>
        {props.buttonLabel2 === 'noCancel' ? null : <button onClick={ () => { toggleVisible() }}>{props.buttonLabel2}</button>}
        {props.children}
      </div>
    </div>
  )
})

ToggleVisible.displayName = 'ToggVisible'
ToggleVisible.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  buttonLabel2: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}
ToggleVisible.defaultProps = {
  onClick: () => {},
}

export default ToggleVisible