import './ProductList.css'
import React, { useEffect, useState, useContext } from 'react'
import { productsContext } from '../../../context/productsContext'
import ReactPaginate from 'react-paginate';
import ProductFilters from '../ProductFilters'
import ProductCard from '../ProductCard'

function ProductList() {

  const {productList} = useContext(productsContext)

  const [currentProducts, setCurrentProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [productOffset, setProductOffset] = useState(0);

  useEffect(() => {
    setProductOffset(0)
  }, [productList]);

  useEffect(() => {
    const getPagination = () => {
      const endOffset = productOffset + 10;

      setCurrentProducts(productList.slice(productOffset, endOffset));
      setPageCount(Math.ceil(productList.length / 10));
    }

    getPagination()
  }, [productOffset, productList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * 10) % productList.length;

    setProductOffset(newOffset);
  };

  const printProducts = (products) => {
    return products.map(product => <ProductCard productInfo={product} key={product.uuid} />)
  }

  return (
    <section>
      <ProductFilters/>
      <section>
        {printProducts(currentProducts)}
        <ReactPaginate className='paginate-container'
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
        />
      </section>
    </section>
  )
}

export default ProductList