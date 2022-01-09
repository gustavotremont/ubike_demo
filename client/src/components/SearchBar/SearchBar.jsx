import React, {useContext} from 'react'
import axios from 'axios'
import { productsContext } from '../../context/productsContext'

function SearchBar() {

  const {setProductList} = useContext(productsContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchText = e.target['search-bar'].value

    const res = await axios.get(`/api/products/?search=${searchText.trim()}`)

    setProductList(res.data.products)
  } 

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search-bar">Buscar Productos</label>
        <input type="text" id='search-bar' name='search-bar' />

        <input type="submit" value="Buscar" />
      </form>
    </section>
  )
}

export default SearchBar