import React, { Component } from 'react'
import Table from '../../components/Table'
import Api from '../../api'

export default class Orders extends Component {
  constructor() {
    super()
    this.getOrders = this.getOrders.bind(this)
    this.childTable = this.childTable.bind(this)
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    this.getOrders()
  }

  async getOrders() {
    let { appId } = this.props.match.params
    let orders = await Api.getOrders(appId)
    this.setState({ orders })
  }


  childTable() {
    let { orders } = this.state
    return orders.map((item, index) => {
      return(
        <tr key = { item.id }>
          <td> {item.title} </td>
          <td> 3 </td>
          <td> 22000 </td>
          <td> { item.userId } </td>
          <td> tarjeta de credito </td>
        </tr>
      )
    })
  }

  render() {
    return(
      <div>
        <h1> Listado de ordenes </h1>
        <Table
          head = {['producto', 'cantidad', 'precio', 'usuario', 'metodo de pago']}
        >
          {this.childTable()}
        </Table>
      </div>
    )
  }
}