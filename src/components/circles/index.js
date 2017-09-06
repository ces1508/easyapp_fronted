import React from 'react'

const Circle = (props) => {
  return (
    <div style = {{ width: '33%' }}>
      <p className = 'title'> {props.title} </p>
      <div className ='circle' style = {{ borderColor: props.color  }}>
        <span> {props.number} </span>
      </div>
    </div>
  )
}
export default Circle
