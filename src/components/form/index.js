import React, { Component } from 'react'

export default class Form extends Component {

  render(){
    return (
      <form action = {this.props.endPoint} onSubmit = {this.props.onSubmit}>
        {this.props.children}
      </form>
    )
  }
}