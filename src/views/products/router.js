import React, {Component} from 'react'
import Products from './'
import New from './new'
import Edit from './edit'
import {
  Route,
  Switch
} from 'react-router-dom'

export default class ProductsRouter extends Component {
  render() {
    return(
      <Switch>
        <Route path = '/apps/:appId/categories/:categoryId/products/new'  component = { New } />
        <Route path = '/apps/:appId/categories/:categoryId/products/:productId/edit' exact component = { Edit }/>
        <Route path = '/apps/:appId/categories/:categoryId/products' exact component = { Products }/>
      </Switch>
    )
  }
}
