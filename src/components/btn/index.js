import React from 'react'
import { Link } from 'react-router-dom'
export const BtnDefault = (props) => {
  return(
    <button className = {`btn ${props.styles}`} onClick = {() => props.handleClick() || null}>
      {props.children}
    </button>
  )
}

export const LinkAsButton = (props) => {
  return(
    <Link to = {props.to} className = {`btn btn-${props.type}`}>
      {props.children}
    </Link>
  )
}

// export const LinkAsIcon = (props) => {
//   return(
//     <Link >
//     </Link>
//   )
// }
