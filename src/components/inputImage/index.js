import React, { Component } from 'react'
// import PropTypes from 'prop-types'

export default class InputImage extends Component{
  constructor() {
    super()
    this.hanldeChangeImage = this.hanldeChangeImage.bind(this)
  }

  hanldeChangeImage(e) {
    if (e.target.files.length > 0) {
      let image = document.getElementById(`${this.props.name}-image`)
      let file = e.target.files[0]
      this.props.handleChange(file)
      let reader = new FileReader()
      reader.onload = (result) => {
        image.parentElement.style.visibility = 'visible'
        image.src = reader.result
      }
      reader.readAsDataURL(file)
    }
  }
  render() {
    return(
      <div className = 'form-group'>
        <label htmlFor = {this.props.name}>
          seleciona el icono de tu app
          <div
            className = 'col-md-12 col-xs-0 center-block remove-float'
            id =  {`${this.props.name}-container`}
            style = {{ visibility: 'hidden' }}
          >
            <img alt = 'icono de la app' id = {`${this.props.name}-image`}
            className = 'preload-icon img-responsive center-block'
            />
          </div>
        </label>
        <input
          type = 'file'
          id = 'productImage'
          name = {this.props.name}
          accept = 'image/*'
          required = {this.props.required}
          onChange = {this.hanldeChangeImage}
        />
      </div>
    )
  }
}

InputImage.defaultProps = {
  required: true
}