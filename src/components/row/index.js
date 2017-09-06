import React from 'react'

const Row = (props) => {
  return(
    <div className = {`row ${props.styles}`}>
      {props.children}
    </div>
  )
}

export default Row
