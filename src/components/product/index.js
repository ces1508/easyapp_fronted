import React from 'react'
import ImageProduct from './imageProduct'
import Description from './description'
import Actions from '../actions'
import numeral from 'numeral'


const Product = (props) => {
  let price = numeral(props.product.price).format('($0,0)')
  return(
    <div className = 'col-md-4 col-xs-12 col-sm-6 product'>
      <ImageProduct { ...props } />
      <div  className = 'card-body panel-body'>
        <h3> { props.product.name } </h3>
        <h4 className = 'text-center'> { price } </h4>
        <Description {...props} />
      </div>
      <Actions edit = { `${props.path}/${props.product.id}/edit` } handleDelete = {() => props.handleDelete(props.product.id)}  />
    </div>
  )
}

export default Product
