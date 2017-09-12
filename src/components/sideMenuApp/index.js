import React from 'react'
import {
  Link
} from 'react-router-dom'

const SideMenu = (props) => {
  return(
    <nav>
      <div className = 'option'>
        <span className = 'material-icons icon'> &#xE01D; </span>
        <Link to= {`/apps/${props.match.params.id}/settings`}>  gestionar </Link>
      </div>
      <div className = 'option'>
        <span className = 'material-icons icon'> settings</span>
        <Link to= {`/apps/${props.match.params.id}/categories`}> configurar app </Link>
      </div>
      <div className = 'option'>
        <span className = 'material-icons icon'> &#xE14F; </span>
        <Link to= {`/apps/${props.match.params.id}/orders`}> ordenes </Link>
      </div>
    </nav>
  )
}

export default SideMenu
