import React from 'react'

const Card = ({product}) => {
  return (
    <div>

        <h1>{product.name}</h1>
        <h3>{product.description}</h3>

    </div>
  )
}

export default Card