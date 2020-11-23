import React from 'react'

class AddForm extends React.Component {
  render() {
    const { title, image, titleHandler, imageHandler, submitHandler } = this.props
    return (
      <form onSubmit={ (event) => submitHandler(event) }>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={ title } onChange={ titleHandler } />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input type="url" className="form-control" value={ image } onChange={ imageHandler } />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default AddForm