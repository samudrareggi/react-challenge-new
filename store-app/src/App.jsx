import React, {useState, useEffect} from 'react'
import ProductList from './components/ProductList.jsx'
import Nav from './components/Nav.jsx'
import Form from './components/Form.jsx'

function App(props) {
  const [products, setProducts] = useState([])
  const [isLogin, setIsLogin] = useState(false)
  const [willAdd, setWillAdd] = useState(false)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  const loginHandler = () => {
    setIsLogin(true)
  }

  const logoutHandler = () => {
    setIsLogin(false)
  }

  const willAddProd = () => {
    if (willAdd) {
      setWillAdd(false)
    } else {
      setWillAdd(true)
    }
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

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  if (!isLogin) {
    return (
      <React.Fragment>
        <Nav loginHandler={ loginHandler } isLogin={ isLogin } logoutHandler={ logoutHandler } />
        <h1 className="text-center">Please login !</h1>
      </React.Fragment>
    )
  }

  return (
    <div>
      <Nav loginHandler={ loginHandler } isLogin={ isLogin } logoutHandler={ logoutHandler } />
      <div className="container mt-3 mb-5">
        <div className="d-flex flex-row justify-content-end">
          <button onClick={ () => willAddProd() } className="btn btn-primary">Add Product</button>
        </div>
        { willAdd &&
          <Form
            titleHandler={ titleHandler } imageHandler={ imageHandler } submitHandler={ submitHandler }
            title={ title } image={ image }
          />
        }
        <div className="row justify-content-around mt-3">
          <ProductList products={ products } deleteProduct={ deleteHandler } />
        </div>
      </div>
    </div>
  )
}

export default App