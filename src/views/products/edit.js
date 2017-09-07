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
    this.handleSubmit = this.handleSubmit.bind(this)
    this.hanldeChangeImage = this.hanldeChangeImage.bind(this)
    this.getProduct = this.getProduct.bind(this)

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
    let { appId, categoryId, productId } = this.props.match.params
    let data = this.state
    let createdProduct = await Api.updateProduct(appId, categoryId, productId ,data)
    if (createdProduct.status === 'updated') {
      this.props.history.goBack()
    } else {
      alert('ocurrio un error al editar el producto')
    }
  }

  async getProduct() {
    let { appId, categoryId, productId } = this.props.match.params
    let product = await Api.getProduct(appId, categoryId, productId)
    this.setState({
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image
    })
  }

  componentDidMount() {
    this.getProduct()
  }

  render() {
    return(
      <Row>
        <div className = 'col-xs-12 col-md-6 remove-float center-block'>
          <img
            src = {`http://localhost:4000/images/${this.state.image}`}
            alt = {this.state.name}
            className = 'app-logo center-block img-responsive img-circle'
          />
        </div>
        <div className = 'col-md-6 col-xs-12 remove-float center-block'>
          <Form onSubmit = {this.handleSubmit} >
            <Input name = 'name' text = 'nombre del producto' onChange = {this.handleInput}  value = {this.state.name}/>
            <Input name = 'price' text = 'precio' onChange = {this.handleInput} value = {this.state.price}/>
            <TextArea  name = 'description' text = 'descripcion del producto' handleChange = {this.handleInput} value = {this.state.description}/>
            <InputImage handleChange = {this.hanldeChangeImage} name = 'productImage'  required = { false }  />
            <div className = 'form-group '>
              <input type = 'submit' value = 'editar producto' className = 'btn btn-success center-block'/>
            </div>
          </Form>
        </div>
      </Row>
    )
  }
}