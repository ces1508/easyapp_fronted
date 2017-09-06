import React from 'react'
import ImageProduct from './imageProduct'
import Description from './description'
import Actions from '../actions'
const Product = (props) => {
  return(
    <div className = 'col-md-4 col-xs-12 col-sm-6 product'>
      <ImageProduct {...props} />
      <div  className = 'card-body panel-body'>
        <h3> {props.product.name} </h3>
        <p> {props.product.price} </p>
        <Description {...props} />
      </div>
      <Actions />
    </div>
  )
}

export default Product
