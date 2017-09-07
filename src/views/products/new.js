import React, { Component } from 'react'
import Api from '../../api'
import Form from '../../components/form'
import Input from '../../components/input'
import TextArea from '../../components/textarea'
import Row from '../../components/row'
import InputImage from '../../components/inputImage'
export default class NewProduct extends Component{
  constructor() {
    super()
    this.state = {
      name: '',
      price: '',
      description: '',
      image: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.hanldeChangeImage = this.hanldeChangeImage.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  hanldeChangeImage(file) {
    this.setState({ image: file })
  }

  handleInput(e) {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }
   async handleSubmit(e) {
    e.preventDefault()
    let { appId, categoryId } = this.props.match.params
    let data = this.state
    let createdProduct = await Api.createProduct(appId, categoryId, data)
    if (createdProduct.status === 'created') {
      this.props.history.goBack()
    }
  }

  render() {
    return(
      <Row>
        <div className = 'col-md-6 col-xs-12 remove-float center-block'>
          <Form onSubmit = {this.handleSubmit} >
            <Input name = 'name' text = 'nombre del producto' onChange = {this.handleInput} />
            <Input name = 'price' text = 'precio' onChange = {this.handleInput} />
            <TextArea  name = 'description' text = 'descripcion del producto' handleChange = {this.handleInput} value = {this.state.description}/>
            <InputImage handleChange = {this.hanldeChangeImage} name = 'productImage'/>
            <div className = 'form-group'>
              <input type = 'submit' value = 'crear producto' className = 'btn btn-success'/>
            </div>
          </Form>
        </div>
      </Row>
    )
  }
}