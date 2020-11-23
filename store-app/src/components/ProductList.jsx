import React from 'react'

class ProductList extends React.Component {
  render() {
    const { products, deleteProduct } = this.props

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
            <p className="card-title mt-3">{ product.title }</p>
          </div>
          <div className="row justify-content-center">
            <button onClick={ () => deleteProduct(product.id) } className="btn btn-danger">Delete</button>
          </div>
        </div>
      ))
    )
  }
}

export default ProductList