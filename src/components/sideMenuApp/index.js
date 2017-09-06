import React from 'react'
import {
  Link
} from 'react-router-dom'

const SideMenu = (props) => {
  return(
    <nav>
      <div className = 'option'>
        <span className = 'material-icons icon'> &#xE01D; </span>
        <a href= {`http://localhost:4000/apps/${props.match.params.id}/`}> gestionar </a>
      </div>
      <div className = 'option'>
        <span className = 'material-icons icon'> settings</span>
        <Link to= {`/apps/${props.match.params.id}/categories`}> configurar app </Link>
      </div>
      <div className = 'option'>
        <span className = 'material-icons icon'> &#xE14F; </span>
        <a href= {`http://localhost:4000/apps/${props.match.params.id}/`}> ordenes </a>
      </div>
    </nav>
  )
}

export default SideMenu
