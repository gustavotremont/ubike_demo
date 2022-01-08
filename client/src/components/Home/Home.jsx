import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar'
import ProductList from '../Products/ProductList'
import axios from 'axios'

function Home() {

  const [productList, setProductList] = useState([])

  useEffect(() => {
    const productListPreLoad = async () => {
      const res = await axios.get('/api/products')

      setProductList(res.data.products)
    }

    productListPreLoad()
  }, [])

  return (
    <section>
      <SearchBar setProductList={setProductList} />
      <ProductList productList={productList} setProductList={setProductList}/>
    </section>
  )
}

export default Home