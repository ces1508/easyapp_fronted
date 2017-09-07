import React from 'react'
import PropTypes from 'prop-types'

const TextArea = (props) => {
  return(
    <div className = 'form-group'>
      <label htmlFor = {props.name} > {props.text} </label>
      <textarea className = "form-control" rows="5"  value = { props.value } name = {props.name} id = {props.name} onChange = {props.handleChange}/>
    </div>
  )
}
TextArea.defaultProps = {
  value : ''
}

TextArea.prototypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default TextArea
