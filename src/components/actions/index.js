import React from 'react'
import { Link } from 'react-router-dom'
const Actions = (props) => {
  return(
    <div className = 'row product-actions'>
        <Link to = './edit' className = 'btn btn-info'> Editar</Link>
        <Link to = './edit' className = 'btn btn-danger'>Eliminar </Link>
    </div>
  )
}

export default Actions
