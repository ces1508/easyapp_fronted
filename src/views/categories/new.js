import React, { Component } from 'react'
import Input from '../../components/input'
import Form from '../../components/form'
import Row from '../../components/row'
import Api from '../../api'
export default class CategoryNew extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.createCategory = this.createCategory.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.createCategory()
  }

  async createCategory() {
    let appId = this.props.appId
    let data = {
      name: this.state.name
    }
    let createdCategory = await Api.createCategory(appId, data)
    console.log(createdCategory)
    if (createdCategory.status === true) {
      this.props.afterCreated()
    } else {
      this.props.handleError()
    }
  }

  handleInput(e) {
    this.setState({ [e.target.name]:  e.target.value })
  }

  render() {
    return(
      <Row>
        <div className = 'col-md-6 col-xs-12 center-block remove-float'>
          <Form onSubmit = {this.handleSubmit}>
            <Input type = 'text' text = 'nombre de la categoria' name = 'name' value = {this.state.name} onChange = {this.handleInput} />
            <div className = 'form-group'>
              <input
                type = 'submit'
                value = 'Crear Categoria'
                className = 'btn btn-large btn-success  center-block'
              />
            </div>
          </Form>
        </div>
     </Row>
    )
  }
}
