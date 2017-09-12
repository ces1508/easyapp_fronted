import React from 'react'
import styles from './styles.css'

export default function Icon (props) {
  return (
    <div className = 'containerIcon' >
      <i className = { `icon ${props.icon.name} ${props.type}` } onClick = {(e) => props.handleClick(e, props.type)}></i>
      <p className = 'iconAuthor'> Author <b> {props.icon.author} </b> </p>
    </div>
  )
}