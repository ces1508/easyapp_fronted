import React, { Component } from 'react'
import Graph from '../../components/graph'
import Circles from '../../components/circles'
import SideMenu from '../../components/sideMenuApp'
export default class ShowApp extends Component {
  render() {
    return(
      <div>
        <div className = 'left-side col-xs-12 col-md-2'>
          <SideMenu match = {this.props.match} />
        </div>
        <h1> vista de una app </h1>
        <div className = 'right-side col-xs-12 col-md-9'>
          <Graph />
          <section className = 'info-sales'>
            <div className = 'direction-row'>
              <Circles number = {24} title = 'crecimiento semanal' color = 'green' />
              <Circles number = {24} title = 'crecimiento semanal' color = 'yellow' />
              <Circles number = {24} title = 'crecimiento semanal' color = 'red' />
            </div>
            <div className = 'direction-row'>
              <Circles number = {24} title = 'crecimiento semanal' color = 'green' />
              <Circles number = {24} title = 'crecimiento semanal' color = 'yellow' />
              <Circles number = {24} title = 'crecimiento semanal' color = 'red' />
            </div>
          </section>

        </div>
      </div>
    )
  }
}