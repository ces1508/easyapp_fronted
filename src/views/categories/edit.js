import React, { Component } from 'react'
import Api from '../../api'
import Form from '../../components/form'
import Row from '../../components/row'
import Input from '../../components/input'
export default class EditCategory extends Component{
  constructor() {
    super()
    this.state = {
      name: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.assignCategory = this.assignCategory.bind(this)
  }

  async handleSubmit(e) {
    e.preventDefault()
    let { appId, id } = this.props.category
    let { name } = this.state
    let data = {
      name
    }
    let updatedCategory = await Api.updateCategory(appId, id, data)
    this.props.afterCreated()
  }

  assignCategory() {
    let { category } = this.props
    this.setState({ name:  category.name })
  }

  handleInput(e) {
    let { name, value } = e.target
    this.setState({ [name]: value })
  }

  componentWillMount() {
    this.assignCategory()
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
