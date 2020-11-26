import React from 'react'
import FavoriteList from '../components/FavoriteList'

function Favorite(props) {
  return (
    <div className="container mt-3 mb-5">
      <div className="row justify-content-around mt-3">
        <FavoriteList/>
      </div>
    </div>
  )
}

export default Favorite