import React from 'react'

function AddForm(props) {
  return (
    <form onSubmit={ (event) => props.submitHandler(event) }>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" value={ props.title } onChange={ props.titleHandler } />
      </div>
      <div className="form-group">
        <label>Image</label>
        <input type="url" className="form-control" value={ props.image } onChange={ props.imageHandler } />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default AddForm