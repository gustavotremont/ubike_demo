import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar'
import ProductList from '../Products/ProductList'
import { productsContext } from '../../context/productsContext' 
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

  const productObj = {productList, setProductList}

  return (
    <section className='home'>
      <productsContext.Provider value={productObj}>
          <SearchBar/>
          <ProductList/>
      </productsContext.Provider>  
    </section>
  )
}

export default Home