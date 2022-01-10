import React, {useState, useEffect} from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Rating from 'react-rating'
import axios from 'axios'

function ProductDetail() {

  const [searchParams] = useSearchParams();
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getProductDetail = async (uuid) => {
      const res = await axios.get(`/api/products/?uuid=${uuid}`)

      setProductDetail(res.data.product)
      setLoading(false)
    }

    getProductDetail(searchParams.get('uuid'))
  }, [])

  return (
    <section className='details'>
      <Link to={`/`} > <h4>Regresar</h4> </Link>
      {
        loading 
          ? <p>loading</p> 
          : <section key={productDetail.uuid} className='details--body' >

              <article className='details--body--product'>
                <p>{productDetail.name}</p>
                <p>{productDetail.price}</p>
              </article>

              <article className='details--body--image'>
                <img src={productDetail.image} alt={productDetail.name} />
              </article>

              <article className='details--body--product'>
                <p>{productDetail.description}</p>
                <Rating className='product-card--rating' initialRating={productDetail.rating} readonly emptySymbol='fa fa-star-o fa-2x medium'
 fullSymbol='fa fa-star fa-2x medium' />
              </article>

              <article className='details--body--provider'>
                <p>{productDetail.provider.name}</p>
                <p>{productDetail.provider.cif}</p>
                <p>{productDetail.provider.address}</p>
              </article>
            </section>
      }
    </section>
  )
}

export default ProductDetail

