import React from 'react'
import Icon from './icon'

export default function ListIcons (props) {
  return(
    <div style = { styles.main }>
      {props.icons.map((item) => (
        <Icon icon = { item } key = {item.id} handleClick = {props.handleClick} type  = {props.type}/>
      ))}
    </div>
  )
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
}
