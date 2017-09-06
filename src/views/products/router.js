import React, {Component} from 'react'
import Products from './'
import {
  Route,
  Switch
} from 'react-router-dom'

export default class ProductsRouter extends Component {
  render() {
    return(
      <Switch>
        <Route path = '/apps/:appId/categories/:categoryId/products'  component = { Products }/>
      </Switch>
    )
  }
}
