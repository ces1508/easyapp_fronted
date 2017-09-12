import React, { Component } from 'react'
import SideMenu from '../../components/menuSettings'
import Api from '../../api/index'
import ListIcons from '../../components/listIcons'
import Modal from '../../components/modal'
import { BtnDefault as Button } from '../../components/btn'
export default class SettingsApp extends Component{
  constructor() {
    super()
    this.getIcons = this.getIcons.bind(this)
    this.state = {
      icons: [],
      menu: [],
      back: [],
      car: [],
      modal: false,
      carIcon: null,
      backIcon: null,
      menuIcon: null,
      currentIcon: null
    }
    this.hideModal = this.hideModal.bind(this)
    this.childModal = this.childModal.bind(this)
    this.showModal = this.showModal.bind(this)
    this.handleColor = this.handleColor.bind(this)
    this.save = this.save.bind(this)
  }

  componentDidMount() {
    this.getIcons()
  }

  hideModal() {
    this.setState({ modal: false })
  }

  showModal(e, type) {
    let icon = e.target
    let currentIcon = this.state.currentIcon
    if (currentIcon) currentIcon.style.color = 'black'
    switch (type) {
      case 'menu':
        this.setState({ modal: true, currentIcon: e.target, menuIcon: icon.classList[1] })
        this.removeFontColor(e.target, 'menu')
        break
      case 'back':
        this.setState({ modal: true, currentIcon: e.target, backIcon: icon.classList[1] })
        this.removeFontColor(e.target, 'back')
        break
      case 'car':
        this.setState({ modal: true, currentIcon: e.target, carIcon: icon.classList[1] })
        this.removeFontColor(e.target, 'car')
        break
      default:
        return null
    }
  }

  removeFontColor(currentIcon ,type) {
    //al icono activo le saco  la clase 3 y si alguno de los que tengan esa clase tiene la clase active se la remuevo
    let classicon = document.getElementsByClassName(currentIcon.classList[2])
    for (let i = 0; i < classicon.length; i++) {
      let parentIcon = classicon[i].parentNode
      if (parentIcon.classList.length > 1) {
        parentIcon.classList.remove('active')
      }
    }
    currentIcon.parentNode.classList.add('active')
  }

  async getIcons () {
    let icons = await Api.getIconsByType()
    let menu = icons.filter(function(item) {
      if (item.type === 'menu') {
        return true
      } else {
        return false
      }
    })
    let back = icons.filter(function(item) {
      if (item.type === 'back') {
        return true
      } else {
        return false
      }
    })
    let car = icons.filter(function(item) {
      if (item.type === 'car') {
        return true
      } else {
        return false
      }
    })
    this.setState({ menu, back, car, icons })
  }

  handleColor(e) {
    let { currentIcon } = this.state
    currentIcon.style.color = e.target.value
    let type = currentIcon.classList[2]
    switch(type) {
      case 'menu':
        this.setState({
          menuIcon: {
            name: this.state.menuIcon,
            color: e.target.value
          }
      })
      break
      case 'back':
        this.setState({
          backIcon: {
            name: this.state.backIcon,
            color: e.target.value
          }
        })
        break
      case 'car':
        this.setState({
          carIcon: {
            name: this.state.carIcon,
            color: e.target.value
          }
        })
        break
      default:
        break
    }
    this.hideModal()
  }

  childModal() {
    return(
      <div>
        <input type = 'color' name = 'colorIcon' onChange = {this.handleColor}/>
      </div>
    )
  }

  async save() {
    let { menuIcon, backIcon, carIcon } = this.state
    if (menuIcon === null) {
      alert('por favor seleciona un icono de menu')
      let element = document.getElementById('menu-icons')
      return element.scrollIntoView()
    }
    if (backIcon === null) {
      alert('por favor seleciona un icono de back o hacia atras')
      let element = document.getElementById('back-icons')
     return  element.scrollIntoView()
    }
    if (carIcon === null) {
      alert('por favor seleciona un icono de carrito de compras')
      let element = document.getElementById('car-icons')
      return element.scrollIntoView()
    }
    let data = {
      icons: {
        menu: menuIcon,
        back: backIcon,
        car: carIcon
      }
    }
    let settingApp = await Api.settingApp(this.props.match.params.appId, data)
    console.log(settingApp)
  }

  render() {
    return(
      <div style = { styles.main }>
        <Modal title = 'configura el color de tu icono' show = {this.state.modal} Hide = {this.hideModal}>
          {this.childModal()}
       </Modal>
        <SideMenu />
        <div style = { styles.content }>
          <Button styles = 'btn-default' handleClick = {this.save}>
            Guardar Configuracion
          </Button>
          <section id = 'menu-icons'>
            <h2 style = { styles.sectionTitle } > configura tu icono de menu</h2>
            <ListIcons icons = {this.state.menu} handleClick = {this.showModal} type = 'menu'/>
          </section>
          <section id =  'back-icons'>
            <h2 style = { styles.sectionTitle } > configura tu icono de back  </h2>
            <ListIcons icons = {this.state.back} handleClick = {this.showModal} type = 'back' />
          </section>
          <section id = 'car-icons'>
            <h2 style = { styles.sectionTitle } > configura tu icono de carrito  </h2>
            <ListIcons icons = {this.state.car} handleClick = {this.showModal} type = 'car'/>
        </section>
        </div>
      </div>
    )
  }
 }
 const styles = {
   main: {
     display: 'flex',
     flexDirection: 'row'
   },
   content: {
     width: '80%'
   },
   sectionTitle:{
     borderBottom: '2px dashed',
     textAlign: 'center'
   }
 }