import React from 'react'
import {Link} from 'react-router-dom'
import Rating from 'react-rating'

function ProductCard({productInfo}) {
  return (
    <article className='product-card'>
      <img src={productInfo.image} alt={productInfo.name} className='product-card--image' />
      <Link className='product-card--name' to={`/product/?uuid=${productInfo.uuid}`} > {productInfo.name} </Link>
      <p className='product-card--price' >Precio: {productInfo.price}</p>
      <Rating className='product-card--rating' initialRating={productInfo.rating} readonly emptySymbol='fa fa-star-o fa-2x medium'
 fullSymbol='fa fa-star fa-2x medium' />
    </article>
  )
}

export default ProductCard