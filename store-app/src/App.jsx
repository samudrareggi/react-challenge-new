import React from 'react'
import axios from 'axios'
import ProductList from './components/ProductList.jsx'
import Nav from './components/Nav.jsx'
import Form from './components/Form.jsx'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [],
      isLogin: false,
      willAdd: false,
      title: '',
      image: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://fakestoreapi.com/products')
      .then(({ data }) => {
        this.setState({
          products: data
        })
      })
  }

  willAddProd() {
    if (this.state.willAdd) {
      this.setState({
        willAdd: false
      })
    } else {
      this.setState({
        willAdd: true
      })
    }
  }

  loginHandler() {
    this.setState({
      isLogin: true
    })
  }

  logoutHandler() {
    this.setState({
      isLogin: false
    })
  }

  deleteHandler(id) {
    const updatedProduct = this.state.products.filter(product => (product.id !== id))
    this.setState({
      products: updatedProduct
    })
  }

  titleHandler(event) {
    this.setState({
      title: event.target.value
    })
  }

  imageHandler(event) {
    this.setState({
      image: event.target.value
    })
  }

  submitHandler(event) {
    event.preventDefault()

    const data = {
      id: this.state.products.length + 1,
      title: this.state.title,
      image: this.state.image
    }

    this.setState({
      products: [...this.state.products, data],
      title: '',
      image: ''
    })
  }

  render() {
    const { products, isLogin, willAdd, title, image } = this.state

    if (!isLogin) {
      return (
        <React.Fragment>
          <Nav login={ this.loginHandler.bind(this) } isLogin={ isLogin } logout={ this.logoutHandler.bind(this) } />
          <h1 className="text-center">Please login !</h1>
        </React.Fragment>
      )
    }

    return (
      <div>
        <Nav login={ this.loginHandler.bind(this) } isLogin={ isLogin } logout={ this.logoutHandler.bind(this) } />
        <div className="container mt-3 mb-5">
          <div className="d-flex flex-row justify-content-end">
            <button onClick={ () => this.willAddProd() } className="btn btn-primary">Add Product</button>
          </div>
          { willAdd &&
            <Form
              titleHandler={this.titleHandler.bind(this)} imageHandler={this.imageHandler.bind(this)} submitHandler={this.submitHandler.bind(this)}
              title={ title } image={ image}
            />
          }
          <div className="row justify-content-around mt-3">
            <ProductList products={ products } deleteProduct={ this.deleteHandler.bind(this) } />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
