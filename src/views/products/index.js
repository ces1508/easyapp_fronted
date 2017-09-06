import React, { Component } from 'react'
import Api from '../../api'
import ListProducts from '../../components/listProducts'
export default class Products extends Component {
  constructor() {
    super()
    this.state = { products: [] }
  }
  async componentDidMount() {
    let {appId, categoryId} = this.props.match.params
    console.log(categoryId)
    let products = await Api.getProducts(appId, categoryId)
    this.setState({ products })
  }
  render(){
    return(
      <div>
        <h1> vista de todos los productos </h1>
        <ListProducts products = {this.state.products} />
      </div>
    )
  }
}
