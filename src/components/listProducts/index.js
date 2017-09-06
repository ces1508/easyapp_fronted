import React from 'react'
import Product from '../product'

const ListProducts = (props) => {
  return(
    <div className = 'row'>
      {
        props.products.map((product) => (
          <Product product = {product} key = {product.id} />
        ))
      }
    </div>
  )
}

export default ListProducts
