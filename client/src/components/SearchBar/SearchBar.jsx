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
    <section className='search'>
      <form className='search--form' onSubmit={handleSubmit}>
        <label className='search--form--label' htmlFor="search-bar">Buscar Productos</label>
        <input className='search--form--input' type="text" id='search-bar' name='search-bar' />

        <input className='search--form--button' type="submit" value="Buscar" />
      </form>
    </section>
  )
}

export default SearchBar