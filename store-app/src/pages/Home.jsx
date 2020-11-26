import React from 'react'
import ProductList from '../components/ProductList.jsx'
import useFetch from '../helpers/useFetcher'
import { Switch, Route, Link } from 'react-router-dom'

function Home(props) {
  const [products, loading] = useFetch('https://fakestoreapi.com/products')

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