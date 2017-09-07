import React, { Component } from 'react'
import Api from '../../api'
import ListProducts from '../../components/listProducts'
import Row from '../../components/row'
import { LinkAsButton } from '../../components/btn'
export default class Products extends Component {
  constructor() {
    super()
    this.state = { products: [] }
    this.getProducts = this.getProducts.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
  }

  async getProducts() {
    let {appId, categoryId} = this.props.match.params
    let products = await Api.getProducts(appId, categoryId)
    this.setState({ products })
  }
  componentDidMount() {
    this.getProducts()
  }

  async deleteProduct(producId) {
    console.log('click in handle delete')
    let {appId, categoryId} = this.props.match.params
    let deletedProduct = await Api.deleteProduct(appId, categoryId, producId)
    if (deletedProduct.status === 'success') {
      this.getProducts()
    } else {
      alert('upps! ocurrio un error al eliminar el producto, pronto lo solucionaremos')
    }
  }

  render(){
    return(
      <div>
        <h1> vista de todos los productos </h1>
        <Row>
          <div className = "col-xs-12">
            <LinkAsButton to = {`${this.props.location.pathname}/new`} styles = 'btn-default'>
              <span className = "glyphicon glyphicon glyphicon-plus" aria-hidden = "true" />
            </LinkAsButton>
          </div>
        </Row>
        <ListProducts products = {this.state.products} path = {this.props.location.pathname} handleDelete = {this.deleteProduct}/>
      </div>
    )
  }
}
