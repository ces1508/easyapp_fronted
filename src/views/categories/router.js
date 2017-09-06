import React, {Component} from 'react'
import Categories from './'
import New from './new'
import ProductsRouter from '../products/router'
import {
  Route,
  Switch
} from 'react-router-dom'

export default class CategoriesRouter extends Component {
  render() {
    return(
      <Switch>
        <Route path = '/apps/:appId/categories/new' exact component = { New } />
        <Route path = '/apps/:appId/categories/:categoryId/' component = { ProductsRouter } />
        <Route path = '/apps/:appId/categories' exact component = { Categories } />
      </Switch>
    )
  }
}
