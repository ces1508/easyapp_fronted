import React, { Component }  from 'react'
import Api from '../../api'
import Row from '../../components/row'
import Form from '../../components/form'
import Input from '../../components/input'
export default class EditApp extends Component{
  constructor() {
    super()
    this.state = {
      name: '',
      description: '',
      privacity: '',
      priceMinimun: '',
    }
    this.getApp = this.getApp.bind(this)
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  async getApp() {
    let { id } = this.props.match.params
    let app = await Api.getApp(id)

    this.setState({
      name: app.name,
      description: app.description,
      priceMinimun: app.priceMinimun,
      privacity: app.privacity,
      icon: app.icon
    })
  }
  componentDidMount() {
    this.getApp()
  }

  handleChangeInput(e) {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return(
      <Row styles = 'center-block remove-float'>
        <div className = 'col-xs-12 col-md-6 remove-float center-block'>
          <img
            src = {`http://localhost:4000/images/${this.state.icon}`}
            alt = {this.state.name}
            className = 'app-logo center-block img-responsive img-circle'
          />
        </div>
        <div className ='col-md-6 col-xs-12 center-block remove-float'>
          <Form>
            <Input
              name = 'name'
              type = 'text'
              text = 'Nombre de la App'
              value = {this.state.name}
              onChange = {this.handleChangeInput}
            />
            <Input
              name = 'privacity'
              type = 'text'
              text = 'url de las politicas de privacidad'
              value = {this.state.privacity}
              onChange = {this.handleChangeInput}
            />
            <Input
              name = 'description'
              type = 'text'
              text = 'Descripcion de la App'
              value = {this.state.description}
              onChange = {this.handleChangeInput}
            />
            <Input
              name = 'priceMinimun'
              type = 'number'
              text = 'Precio Minimo de compra'
              value = {this.state.priceMinimun}
              onChange = {this.handleChangeInput}
            />
            <div className = 'form-group'>
              <input
                type = 'submit'
                value = 'Editar App'
                className = 'btn btn-large btn-info  center-block'
              />
            </div>
          </Form>
        </div>
      </Row>
    )
  }
}