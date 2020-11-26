import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DetailProduct } from '../store'

function ProductDetail(props) {
  const product = useSelector((state) => state.product)
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(DetailProduct(`https://fakestoreapi.com/products/${id}`))
    return () => {
      console.log('Unmounted')
    }
  }, [dispatch, id])

  // if (loading) {
  //   return (
  //     <div className="d-flex justify-content-center mt-5">
  //       <div className="spinner-border" role="status">
  //       </div>
  //       <h4>Please wait...</h4>
  //     </div>
  //   )
  // }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card shadow p-3 mt-5 mb-5 bg-white rounded">
          <div className="row justify-content-center">
            <img
              src={product.image}
              className="card-img-top mt-3"
              style={{ maxHeight: "18rem", maxWidth: "18rem" }}
              alt="Product">
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