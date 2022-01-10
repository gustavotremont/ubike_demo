import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home';
import ProductDetail from '../Products/ProductDetail';


function Main() {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<ProductDetail/>}/>
      </Routes>      
    </main>
  )
}

export default Main
