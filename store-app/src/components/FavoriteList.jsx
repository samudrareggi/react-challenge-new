import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function FavoriteList(props) {
  const favorites = useSelector((state) => state.favorites)
  const dispatch = useDispatch()

  const deleteHandler = (id) => {
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: id
    })
  }

  return (
    favorites.map((favorite) => (
      <div className="card shadow p-3 mb-5 bg-white rounded" key={"fav" + favorite.id} style={{ width: "12rem" }}>
        <div className="row justify-content-center" style={{ height: "8rem" }}>
          <img
            src={favorite.image}
            className="card-img-top mt-3"
            style={{ maxHeight: "8rem", maxWidth: "8rem", cursor: "pointer" }}
            alt="...">
          </img>
        </div>
        <div className="card-body">
          <p className="card-title mt-3">{ favorite.title }</p>
        </div>
          <button onClick={ () => deleteHandler(favorite.id) } className="btn btn-danger">Delete</button>
      </div>
    ))
  )
}

export default FavoriteList