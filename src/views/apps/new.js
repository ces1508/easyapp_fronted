import React, { Component } from 'react'
import Input from '../../components/input'
import Form from '../../components/form'
import Row from '../../components/row'
import Api from '../../api'
export default class NewApp extends Component {
  constructor() {
    super()
    this.hanldeChangeInput = this.hanldeChangeInput.bind(this)
    this.hanldeChangeImage = this.hanldeChangeImage.bind(this)
    this.hanldeSubmit = this.hanldeSubmit.bind(this)
    this.state = {
      name: '',
      privacity: '',
      description: '',
      priceMinimun: '',
      icon: '',
      errors: []
    }
  }

  hanldeChangeInput(e) {
    let { name, value} = e.target
    this.setState({ [name]: value })
  }

  hanldeChangeImage(e) {
    if (e.target.files.length > 0) {
      let image = document.getElementById('iconPreview')
      let file = e.target.files[0]
      this.setState({ icon: file })
      let reader = new FileReader()
      reader.onload = (result) => {
        document.getElementById('iconContainer').style.visibility = 'visible'
        image.src = reader.result
      }
      reader.readAsDataURL(file)
    }
  }

  async hanldeSubmit(e) {
    let { errors } = this.state
    let app = {
      name: this.state.name,
      description: this.state.description,
      icon: this.state.icon,
      priceMinimun: this.state.priceMinimun,
      privacity: this.state.privacity
    }

    errors = []
    e.preventDefault()
    let image = new Image()
    image.src = document.getElementById('iconPreview').src
    if (image.width !== 1024 || image.height !== 1024) {
      errors.push({
        name: 'icono',
        message: 'la imagen debe tener un tamaño de 1024px x 1024px'
      })
      this.setState({ errors })
    }
    if (errors.length < 1) {
      await Api.createApp(app)
      this.props.history.push('/apps')
    }

  }

  renderErros() {
    let { errors } = this.state
    let containerError = document.getElementById('errors')
    if (containerError) {
        let div = document.getElementById('errors')
        div.scrollIntoView()
      if (errors.length > 0) {
        containerError.style.visibility = 'visible'
        return errors.map((error, index) => {
          return(
            <li key = {index}>
             <p> el campo {error.name} </p>
             <p> ayuda: {error.message} </p>
            </li>
          )
        })
      } else {
        containerError.style.visibility = 'hidden'
      }
    }
  }

  render() {
    return(
      <div>
        <h1> creando un nueva app </h1>
        <Row >
        <div
          className = 'errors alert alert-danger col-md-6 col-xs-12 remove-float center-block'
          style = {{ visibility: 'hidden' }}
          id = "errors"
          role = 'alert'
          >
            <ul>
              {this.renderErros()}
            </ul>
          </div>
          <div className ='col-md-6 col-xs-12 center-block remove-float'>
            <Form
              onSubmit = {this.hanldeSubmit}
              endPoint = 'http://localhost:4000/apps/'
            >
              <Input
                type = 'text'
                name = 'name'
                text = 'Nombre de la App'
                placeholder = 'nombre de la app'
                required = { true }
                value = {this.state.name}
                onChange = { this.hanldeChangeInput }
              />
              <Input
                type = 'url'
                text = 'Url de la Politica de Privacidad'
                name = 'privacity'
                required = { true }
                value = {this.state.privacity}
                placeholder = 'https://mysite.com/mypolitics.pdf'
                onChange = { this.hanldeChangeInput }
              />
              <Input
                type = 'text'
                text = 'Descripcion de la App'
                required = { true }
                name = 'description'
                placeholder = ''
                value = {this.state.description}
                onChange = { this.hanldeChangeInput }
              />
              <Input
                type = 'number'
                text = 'Precio Minimo de Compra'
                required = { true }
                name = 'priceMinimun'
                placeholder = '10.000'
                value = {this.state.priceMinimun}
                onChange = { this.hanldeChangeInput }
              />
              <label htmlFor = 'iconApp'>
                seleciona el icono de tu app
                <div className = 'col-md-12 col-xs-0 center-block remove-float' id = 'iconContainer' style = {{ visibility: 'hidden' }}>
                  <img alt = 'icono de la app' id = 'iconPreview'
                  className = 'preload-icon img-responsive center-block'
                  />
                </div>
                <input
                  type = 'file'
                  id = 'iconApp'
                  name = 'icon'
                  accept = 'image/*'
                  required
                  onChange = {this.hanldeChangeImage}
                />
              </label>
              <div className = 'form-group'>
                <input
                  type = 'submit'
                  value = 'Crear App'
                  className = 'btn btn-large btn-success  center-block'
                />
              </div>
            </Form>
          </div>
        </Row>
      </div>
    )
  }
}
