import React from 'react'
import ProductCard from '../ProductCard'

function ProductList({productList, setProductList}) {

  const printProducts = (products) => {
    return products.map(product => <ProductCard productInfo={product} />)
  }

  return (
    <section>
      {/* <section>

      </section> */}
      <section>
        {printProducts(productList)}
      </section>
    </section>
  )
}

export default ProductList