import React from 'react'
import { useDispatch } from 'react-redux'
import FavoriteList from '../components/FavoriteList'

function Favorite(props) {
  const dispatch = useDispatch()

  const deleteHandler = (id) => {
    dispatch({
      type: 'DELETE_FAVORITE',
      payload: id
    })
  }
  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-around mt-3">
      <FavoriteList deleteHandler={ deleteHandler } />
      </div>
    </div>
  )
}

export default Favorite