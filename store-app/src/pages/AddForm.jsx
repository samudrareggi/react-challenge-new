import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


function AddForm(props) {
  const products = useSelector((state) => state.productsReducer.products)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')
  const history = useHistory()

  const dispatch = useDispatch()

  const titleHandler = (event) => {
    setTitle(event.target.value)
  }

  const imageHandler = (event) => {
    setImage(event.target.value)
  }

  const priceHandler = (event) => {
    setPrice(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    dispatch({
      type: 'ADD_PRODUCTS',
      payload: {
        id: products.length + 1,
        title,
        image,
        price
      }
    })
    setImage('')
    setTitle('')
    setPrice('')

    history.push(`/`)
  }

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-5 shadow rounded text-center" style={{ width: "50%" }}>
      <form onSubmit={ (event) => submitHandler(event) }>
        <div className="form-group">
          <label>Title</label> <br/>
          <input type="text" className="form-control" value={ title } onChange={ titleHandler } />
        </div>
        <div className="form-group">
          <label>Image</label> <br/>
          <input type="url" className="form-control" value={ image } onChange={ imageHandler } />
        </div>
        <div className="form-group">
          <label>Price</label> <br/>
          <input type="number" className="form-control" style={{width: '30%', margin: 'auto'}} value={ price } onChange={ priceHandler } />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default AddForm