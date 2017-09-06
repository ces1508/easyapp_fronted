import React from 'react'
const Description = (props) => {
  return(
    <div className = 'row'>
      <div className = 'product-description' >
        <button
          type="button"
          className="btn btn-info center-block"
          data-toggle="collapse"
          data-target= {`#${props.product.id}`}
        >
          Ver Descripcion
        </button>
        </div>
      <div className = 'collapse' id = {props.product.id}>
        <pre className = 'text-description'> {props.product.description} </pre>
      </div>
    </div>
  )
}

export default Description
