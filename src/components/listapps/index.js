import React, { Component } from 'react'
import App from '../app'
export default class ListApps extends Component {
  render() {
    let { apps } = this.props
    return (
      <div className = 'flex'>
        {
          apps.map((app, index) => (
            <App  app = { app } key = { app.id }  match = { this.props.match }/>
          ))
        }
      </div>
    )
  }
}