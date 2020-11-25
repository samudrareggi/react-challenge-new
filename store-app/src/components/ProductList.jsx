import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

function ProductList(props) {
  const [loading, setLoading] = useState(false)
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const favoriteHandler = (data) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
    dispatch({
      type: 'ADD_FAVORITE',
      payload: data
    })
  }

  return (
    products.map((product) => (
      <div className="card shadow p-3 mb-5 bg-white rounded" key={ product.id } style={{ width: "18rem" }}>
        <div className="row justify-content-center" style={{ height: "8rem" }}>
          <img
            src={product.image}
            className="card-img-top mt-3"
            style={{ maxHeight: "8rem", maxWidth: "8rem", cursor: "pointer" }}
            alt="..."
            onClick={() => props.onClick(product.id)}>
          </img>
        </div>
        <div className="card-body">
          <p className="card-title mt-3">{ product.title }</p>
        </div>
        <div className="row justify-content-center">
          { loading
              ? <div className="spinner-grow text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              : <i className="fa fa-heart text-danger"
                  style={{ cursor: "pointer", fontSize: "2em"}}
                  onClick={ () => favoriteHandler(product) }>
                </i>
          }
        </div>
      </div>
    ))
  )
}

export default ProductList