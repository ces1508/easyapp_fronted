import React from 'react'
import PropTypes from 'prop-types'

const Input = (props) => {
  return(
    <div className = 'form-group'>
      <label htmlFor = {props.name} >
       {props.text ||  props.name}
      </label>
      <input
        type = {props.type}
        id = {props.name}
        value = {props.value}
        placeholder = {props.placeholder}
        className = {`form-control ${props.styles}`}
        onChange = {props.onChange}
        name = {props.name}
        required = {props.required}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'string',
  required: true
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
export default Input
