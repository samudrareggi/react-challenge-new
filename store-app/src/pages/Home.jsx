import React, {useState} from 'react'
import ProductList from '../components/ProductList.jsx'
import useFetch from '../helpers/useFetcher'
import {  useRouteMatch, Switch, Route, Link, useHistory } from 'react-router-dom'

function Home(props) {
  const [products, loading, setProducts] = useFetch('https://fakestoreapi.com/products')
  const [willAdd, setWillAdd] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  
  const history = useHistory()

  function onClick(id){
    history.push(`/${id}`)
  }

  const deleteHandler = (id) => {
    const updatedProduct = products.filter(product => (product.id !== id))
    setProducts(updatedProduct)
  }

  const titleHandler = (event) => {
    setTitle(event.target.value)
  }

  const imageHandler = (event) => {
    setImage(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const data = {
      id: products.length + 1,
      title: title,
      image: image
    }

    setProducts([...products, data])
    setImage('')
    setTitle('')
    setWillAdd(false)
  }

  if (loading) return <h1 className="text-center">Please wait...</h1>

  return (
    <div>
      <div className="container mt-3 mb-5">
        <div className="d-flex flex-row justify-content-end">
          <Link to="/addProduct" className="btn btn-primary">Add Product</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <div className="row justify-content-around mt-3">
              <ProductList products={ products } deleteProduct={ deleteHandler } onClick={ onClick }/>
            </div>
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default Home