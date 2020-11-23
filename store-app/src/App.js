import React from 'react'
import axios from 'axios'
import './App.css';
import ProductList from './ProductList'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      products: []
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

  render() {
    const { products } = this.state

    return (
      <div className="container mt-5 mb-5">
        <div className="row justify-content-around">
          <ProductList products={ products } />
        </div>
      </div>
    )
  }
}

export default App;
