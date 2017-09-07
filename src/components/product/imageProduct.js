import React from 'react'
const source = 'http://localhost:4000/images/'
const ImageProduct = (props) => {
  return(
    <img
      src = {`${source}${props.product.image}`}
      className = 'img-thumbnail image-product card-img-top img-circle'
      alt = {props.product.name}
    />
  )
}

export default ImageProduct