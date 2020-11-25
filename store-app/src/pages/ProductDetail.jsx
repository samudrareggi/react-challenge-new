import React, {useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail(props) {
  const { id } = useParams()
  const [ product, setProduct ] = useState({})
  const [ loading, setLoading ] = useState(false)

  useEffect(()=> {
    setLoading(true)
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => {
      setProduct(data)
    })
    .catch(console.log)
    .finally( _=> setLoading(false))
  }, [id])

  if (loading) return <h3>Loading product....</h3>

  return (
    <div className="container">
      <div className="card shadow p-3 mb-5 bg-white rounded" style={{ width: "18rem" }}>
        <div className="row justify-content-center" style={{ height: "8rem" }}>
          <img
            src={product.image}
            className="card-img-top mt-3"
            style={{ maxHeight: "8rem", maxWidth: "8rem" }}
            alt="...">
          </img>
        </div>
        <div className="card-body">
          <h5 className="card-title mt-3">{ product.title }</h5>
          <p className="card-text">{ product.description }</p>
        </div>
        <div className="card-footer">
          { product.price }
        </div>
      </div>
    </div>
  )
}
export default ProductDetail