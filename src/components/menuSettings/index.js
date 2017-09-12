import React, { Component } from 'react'
export default class SideMenu extends Component{
  render() {
    return(
      <div style = {styles.leftSide}>
        <div style = {styles.item}>
          iconos
        </div>
        <div style = {styles.item}>
          colores
        </div>
        <div style = {styles.item}>
          fuentes
        </div>
        <div style = {styles.item}>
          imagenes
        </div>
        <div style = {styles.item}>
          Videos
        </div>
      </div>
    )
  }
}

const styles = {
  leftSide: {
    backgroundColor: 'yellow',
    width: '20%'
  },
  item: {
    padding: '1em',
    borderWidth: 1,
  },

}