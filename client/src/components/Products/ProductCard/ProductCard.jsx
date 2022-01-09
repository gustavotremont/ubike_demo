import './ProductCard.css'
import React from 'react'

function ProductCard({productInfo}) {
  return (
    <article>
      <h4>{productInfo.name}</h4>
      <p>{productInfo.provider.name}</p>

      <img src={productInfo.image} alt={productInfo.name} className='product-card-image' />

      <p>{productInfo.price}</p>
      <p>{productInfo.rating}</p>
    </article>
  )
}

export default ProductCard