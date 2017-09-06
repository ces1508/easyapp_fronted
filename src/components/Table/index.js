import React, { Component } from 'react'
// import Item from './item'
export default class Table extends Component {
  constructor() {
    super()
    this.renderHead = this.renderHead.bind(this)
  }

  renderHead() {
    let { head } = this.props
    if (head) {
      return(
        <thead>
          <tr>
          {
            head.map((title, index) => {
             return <th key = {title}> {title} </th>
            })
          }
          </tr>
        </thead>
      )
    } else {
      return null
    }
  }

  render() {
    return(
      <table className = 'table-striped table'>
        {this.renderHead()}
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    )
  }
}
