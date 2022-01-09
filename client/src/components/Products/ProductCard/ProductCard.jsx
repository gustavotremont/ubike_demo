import './ProductCard.css'
import React from 'react'
import {Link} from 'react-router-dom'

function ProductCard({productInfo}) {
  return (
    <article>
      <Link to={`/product/?uuid=${productInfo.uuid}`} > <h4>{productInfo.name}</h4> </Link>
      <p>{productInfo.provider.name}</p>

      <img src={productInfo.image} alt={productInfo.name} className='product-card-image' />

      <p>{productInfo.price}</p>
      <p>{productInfo.rating}</p>
    </article>
  )
}

export default ProductCard