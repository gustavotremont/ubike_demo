import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
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
    <>
      {
        loading 
          ? <p>Loading...</p>
          : <section key={productDetail.uuid}>
              <article>
                <img src={productDetail.image} alt={productDetail.name} />
              </article>

              <article>
                <p>{productDetail.name}</p>
                <p>{productDetail.price}</p>
                <p>{productDetail.rating}</p>
                <p>{productDetail.description}</p>
              </article>

              <article>
                <p>{productDetail.provider.name}</p>
                <p>{productDetail.provider.cif}</p>
                <p>{productDetail.provider.address}</p>
              </article>
            </section>
      }
    </>
  )
}

export default ProductDetail

