import React from 'react'
import Product from '../product'

const ListProducts = (props) => {
  return(
    <div className = 'row'>
      {
        props.products.map((product) => (
          <Product product = {product} key = {product.id}  path = {props.path} handleDelete = {props.handleDelete}/>
        ))
      }
    </div>
  )
}

export default ListProducts
