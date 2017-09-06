import React, { Component } from 'react'
import Api from '../../api'
import Table from '../../components/Table'
import { BtnDefault } from '../../components/btn'
import { Link } from 'react-router-dom'
import Modal from '../../components/modal'
import CreateCategory from './new'
import EditCategory from './edit'
export default class AllCategories extends Component {
  constructor() {
    super()
    this.state = {
      categories: [],
      modalDelete: false
    }
    this.head = [
      'nombre de la categoria',
      'acciones'
    ]
    this.getCategories = this.getCategories.bind(this)
    this.destroyCategory = this.destroyCategory.bind(this)
    this.childrenTable = this.childrenTable.bind(this)
    this.hideModal = this.hideModal.bind(this)
    this.showModal = this.showModal.bind(this)
    this.deleteCategory = this.deleteCategory.bind(this)
    this.afterCreatedCategory = this.afterCreatedCategory.bind(this)
    this._ModalChildren = this._ModalChildren.bind(this)
  }

  async getCategories () {
    let { appId } = this.props.match.params
    let categories = await Api.getCategories(appId)
    this.setState({ categories })

  }
  componentDidMount () {
    this.appId = this.props.match.params.appId
    this.getCategories()
  }

  async destroyCategory (categoryId) {
    let destroyCategory = await Api.deleteCategory(this.appId, categoryId)
    if (destroyCategory.status === 'success') {
      this.hideModal()
      this.getCategories()
    } else {
      alert('ocurrio un error al elminar la categoria')
    }
  }

  showModal (type = null) {
    this.setState({ modal: true, type})
  }

  hideModal() {
    this.setState({ modal: false })
  }

  deleteCategory() {
    let { type } = this.state
    return(
      <div style = {{ display: 'flex', justifyContent: 'space-between'}}>
        <BtnDefault styles = 'btn-success' handleClick = {() => this.destroyCategory(type.payload.id)}>
          Eliminar categoria
        </BtnDefault>
        <BtnDefault styles = 'btn-danger'>
          cerrar
        </BtnDefault>
    </div>
    )
  }

  afterCreatedCategory () {
    this.hideModal()
    this.getCategories()
  }

  childrenTable () {
    let { categories } = this.state
    if(categories.length > 0) {
      return categories.map((category, index) => {
        return(
          <tr key = {category.id}>
            <td> {category.name} </td>
            <td>
              <div className = 'dropdown'>
                <button
                  type = 'button'
                  id = 'dropdownMenuButton'
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  className = 'btn btn-default dropdown-toggle'
                >
                administrar
                <span style = {{ marginLeft: '5px' }} className="caret"></span>
                </button>
                <ul className = 'dropdown-menu' aria-labelledby="dropdownMenuButton">
                  <li>
                    <a />
                    <Link to={`${this.props.match.url}/${category.id}/products`} className = 'dropdown-item text-success text-center'> Administrar Productos</Link>
                  </li>
                  <li>
                    <p
                      className = 'dropdown-item text-info text-center'
                      onClick = {
                        () =>
                          this.showModal({ type: 'edit', payload: category })
                      }
                    >
                      Editar Categoria
                    </p>
                  </li>
                  <li>
                    <p
                    style = {{ cursor: 'pointer' }}
                    className = 'dropdown-item text-danger text-center'
                    onClick = {
                      () =>
                        this.showModal({type: 'delete', payload: {id: category.id}})
                    }
                      > Borrar Categoria</p>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        )
      })
    } else {
      return null
    }
  }

  _ModalChildren () {
    let { type } = this.state
    if (type) {
      switch (type.type) {
        case 'create':
          return <CreateCategory appId = {this.props.match.params.appId} afterCreated = {() => this.afterCreatedCategory()} />
          break;
        case 'edit':
          return <EditCategory category = { type.payload } afterCreated = {() => this.afterCreatedCategory()} />
          break;
        case 'delete': {
          return this.deleteCategory()
            break;
        }
        default:
          return null
      }
    }
  }
  _titleModal(type) {
    if (type) {
      if (type.type === 'create') {
        return 'Crear Categoria'
      } else if (type.type === 'edit') {
        return 'Editar Categoria'
      }
      return 'Estas seguro de Eliminar la Categoria ?'
    }

  }
  render() {
    let { type } = this.state
    return(
      <div>
        <Modal
          header =  {true}
          show = { this.state.modal }
          Hide = { this.hideModal }
          title = {this._titleModal(type)}
        >
          {
            this._ModalChildren()
          }
        </Modal>
        <h1> Vista de las categorias de la app </h1>
        <BtnDefault styles = 'btn-default' handleClick = {() => this.showModal({type: 'create'})} >
          <span className = "glyphicon glyphicon glyphicon-plus" aria-hidden = "true" />
        </BtnDefault>
        <Table head = {this.head} items = {this.state.categories}>
          {this.childrenTable()}
        </Table>
      </div>
    )
  }
}
