import React, { Component } from 'react'
import Index from './'
import Show from './show'
import New from './new'
import Edit from './edit'
import Categories from '../categories/router'
import {
  Route,
  Switch
} from 'react-router-dom'

export default class AppRouter extends Component{
  render() {
    return (
      <Switch>
        <Route path = {`${this.props.match.url}/new`}  component = { New }  exact = { true }/>
        <Route path = {`${this.props.match.url}/:id`} component = { Show }  exact />
        <Route path = {`${this.props.match.url}/:id/edit`} component = { Edit }  exact />
        <Route path = {`${this.props.match.url}/:appId/categories`} component = {Categories} />
        <Route path = {`${this.props.match.url}/`} component = { Index }  exact />
      </Switch>
    )
  }
}
