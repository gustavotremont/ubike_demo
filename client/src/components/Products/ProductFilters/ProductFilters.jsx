import React, {useState, useContext} from 'react'
import { productsContext } from '../../../context/productsContext'

function ProductFilters() {
  const {productList, setProductList} = useContext(productsContext)

  const [sortName, setSortName] = useState(null)
  const [sortRating, setSortRating] = useState(null)
  const [sortPrice, setSortPrice] = useState(null)

  const sortByName = () => {
    sortName ? setSortName(false) : setSortName(true)
    const sortArray = [...productList]

    sortArray.sort( (a,b) => b.name.localeCompare(a.name) )
    if(!sortName) sortArray.reverse()

    setProductList(sortArray)
  }

  const sortByRating = () => {
    sortRating ? setSortRating(false) : setSortRating(true)
    const sortArray = [...productList]

    sortArray.sort( (a,b) => a.rating-b.rating )
    if(!sortRating) sortArray.reverse()

    setProductList(sortArray)
  }

  const sortByPrice = () => {
    sortPrice ? setSortPrice(false) : setSortPrice(true)
    const sortArray = [...productList]

    sortArray.sort( (a,b) => a.price-b.price )
    if(!sortPrice) sortArray.reverse()

    setProductList(sortArray)
  }

  const setArrow = (sort) => {
    return sort ? <span>&#8657;</span> : sort === false ? <span>&#8659;</span> : null  
  }

  return (
    <article>
      <h3>Filtros de Busqueda</h3>
      <button onClick={sortByName} >Nombre { setArrow(sortName) } </button>
      <button onClick={sortByRating} >Rating { setArrow(sortRating) } </button>
      <button onClick={sortByPrice} >Precio { setArrow(sortPrice) } </button>
    </article>
  )
}

export default ProductFilters

