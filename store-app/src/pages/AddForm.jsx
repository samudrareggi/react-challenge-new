import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function AddForm(props) {
  const products = useSelector((state) => state.productsReducer.products)
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')

  const dispatch = useDispatch()

  const titleHandler = (event) => {
    setTitle(event.target.value)
    console.log(title)
  }

  const imageHandler = (event) => {
    setImage(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: {
        id: products.length + 1,
        title: title,
        image: image
      }
    })
    setImage('')
    setTitle('')
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default AddForm