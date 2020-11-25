import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../helpers/useFetcher'

function ProductDetail(props) {
  const { id } = useParams()
  const [product, loading] = useFetch(`https://fakestoreapi.com/products/${id}`)

  if (loading) return <h3>Loading product....</h3>

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card shadow p-3 mt-5 mb-5 bg-white rounded">
          <div className="row justify-content-center">
            <img
              src={product.image}
              className="card-img-top mt-3"
              style={{ maxHeight: "18rem", maxWidth: "18rem" }}
              alt="...">
            </img>
          </div>
          <div className="card-body">
            <h5 className="card-title mt-3">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <div className="card-footer">
            ${product.price}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ProductDetail