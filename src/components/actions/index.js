import React from 'react'
import { Link } from 'react-router-dom'
import { BtnDefault } from '../btn'
const Actions = (props) => {
  return(
    <div className = 'row product-actions'>
        <Link to = { props.edit } className = 'btn btn-info'> Editar</Link>
        <BtnDefault styles = 'btn-danger' handleClick = {props.handleDelete}> Eliminar </BtnDefault>
    </div>
  )
}

export default Actions
