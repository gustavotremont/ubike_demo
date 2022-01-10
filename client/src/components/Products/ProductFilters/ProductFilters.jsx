import React, {useState, useContext} from 'react'
import { productsContext } from '../../../context/productsContext'

function ProductFilters() {
  const {productList, setProductList} = useContext(productsContext)

  const [sortName, setSortName] = useState(null)
  const [sortRating, setSortRating] = useState(null)
  const [sortPrice, setSortPrice] = useState(null)

  const handleSort = (event) => {
    const sorts = {sortName, sortRating, sortPrice} // sort Value Objet
    const setSorts = {setSortName, setSortRating, setSortPrice} // setSort functions Objet
    const sortOption = event.target.id // name of sort method
    const sortSetName = 'set' + sortOption.charAt(0).toUpperCase() + sortOption.slice(1) // name of setSort function
    const sortFieldName = sortOption.replace("sort", "").toLowerCase(); // name of field to sort
    const sortArray = [...productList] // temp array

    sorts[sortOption] ? setSorts[sortSetName](false) : setSorts[sortSetName](true)

    sortOption === 'sortName'
        ? sortArray.sort( (a,b) => b[sortFieldName].localeCompare(a[sortFieldName]) )
        : sortArray.sort( (a,b) => a[sortFieldName]-b[sortFieldName] )
    if(!sorts[sortOption]) sortArray.reverse()

    for (const set in setSorts) {
      if( set !== sortSetName ) setSorts[set](null)
    }

    setProductList(sortArray)    
  }

  const setArrow = (sort) => {
    return sort ? <span>&#8657;</span> : sort === false ? <span>&#8659;</span> : null  
  }

  return (
    <article className='filters'>
      <h3 className='filters--text' >Filtros de Busqueda</h3>
      <section className='filters--buttons'>
        <button id='sortName' className='filters--buttons--button' onClick={handleSort} >Nombre { setArrow(sortName) } </button>
        <button id='sortRating' className='filters--buttons--button' onClick={handleSort} >Rating { setArrow(sortRating) } </button>
        <button id='sortPrice' className='filters--buttons--button' onClick={handleSort} >Precio { setArrow(sortPrice) } </button>
      </section>
    </article>
  )
}

export default ProductFilters

