import React from 'react'

class ProductList extends React.Component {
  render() {
    const { products } = this.props

    return (
      products.map((product) => (
        <div className="card shadow p-3 mb-5 bg-white rounded" key={ product.id } style={{ width: "18rem" }}>
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
            <div className="row justify-content-center">
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      ))
    )
  }
}

export default ProductList