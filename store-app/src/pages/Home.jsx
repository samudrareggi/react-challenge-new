import React, { useEffect } from 'react'
import ProductList from '../components/ProductList.jsx'
import { Switch, Route, Link } from 'react-router-dom'
import { FetchProducts } from '../store'
import { useDispatch, useSelector } from 'react-redux'

function Home(props) {
  const products = useSelector((state) => state.productsReducer.products)
  const loading = useSelector((state) => state.productsReducer.productsLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    if (products.length === 0) {
      dispatch(FetchProducts('https://fakestoreapi.com/products'))
    }
  })

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
        </div>
        <h4>Please wait...</h4>
      </div>
    )
  }

  return (
    <div>
      <div className="container mt-3 mb-5">
        <div className="d-flex flex-row justify-content-end">
          <Link to="/addProduct" className="btn btn-primary">Add Product</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <div className="row justify-content-around mt-3">
              <ProductList/>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Home