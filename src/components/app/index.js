import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class App extends Component {

  render() {
    let { app } = this.props
    return (
      <div className = 'app'>
        <Link to = {`${this.props.match.url}/${app.id}`}>
          <img
            className = 'app-logo img-responsive img-circle center-block'
            security
            alt = {app.name}
            src= {`http://localhost:4000/images/${app.icon}`} />
          <div className = 'col-xs-12 text-center'>
            <h3> {app.name} </h3>
            <p> incative 1.1</p>
            <Link to = {  `/apps/${app.id}/edit` } className = 'center-block'>
              editar
            </Link>
          </div>
        </Link>
      </div>
    )
  }
}
