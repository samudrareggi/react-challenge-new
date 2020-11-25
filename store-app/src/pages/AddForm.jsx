import React from 'react'

function AddForm(props) {
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="url" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default AddForm