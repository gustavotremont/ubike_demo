import React, {useState, useContext} from 'react'
import { productsContext } from '../../../context/productsContext'

function ProductFilters() {
  const {productList, setProductList} = useContext(productsContext)

  const [sortName, setSortName] = useState(false)
  const [sortRating, setSortRating] = useState(false)
  const [sortPrice, setSortPrice] = useState(false)

  // const compare = (a, b, field) => {
  //   if ( a[field] < b[field] ){
  //     return -1;
  //   }
  //   if ( a[field] > b[field] ){
  //     return 1;
  //   }
  //   return 0;
  // }

  const sortByName = () => {
    sortName ? setSortName(false) : setSortName(true)
    const sortArray = productList

    sortArray.sort( (a,b) => b.name.localeCompare(a.name) )
    if(!sortName) sortArray.reverse()

    setProductList(sortArray)
  }

  const sortByRating = () => {
    sortRating ? setSortRating(false) : setSortRating(true)
    const sortArray = productList

    sortArray.sort( (a,b) => a.rating-b.rating )
    if(!sortRating) sortArray.reverse()

    setProductList(sortArray)
  }

  const sortByPrice = () => {
    sortPrice ? setSortPrice(false) : setSortPrice(true)
    const sortArray = productList

    sortArray.sort( (a,b) => a.price-b.price )
    if(!sortPrice) sortArray.reverse()

    setProductList(sortArray)
  }

  return (
    <article>
      <h3>Filtros de Busqueda</h3>
      <button onClick={sortByName} >Nombre</button>
      <button onClick={sortByRating} >Rating</button>
      <button onClick={sortByPrice} >Precio</button>
      
    </article>
  )
}

export default ProductFilters

