import { createStore } from 'redux'

const initialState = {
  products: [],
  favorites: []
}

function reducer(state= initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      const newProducts = state.products.concat(action.payload)
      return {...state, products: newProducts}

    case 'DELETE_PRODUCT':
      const updatedProducts = state.products.filter(product => (product.id !== action.payload))
      return {...state, products: updatedProducts}

    case 'ADD_FAVORITE':
      const addFavorite = state.favorites.concat(action.payload)
      return {...state, favorites: addFavorite}

    case 'DELETE_FAVORITE':
      const updatedFavorites = state.favorites.filter(favorite => (favorite.id !== action.payload))
      return {...state, favorites: updatedFavorites}
    default:
      return state
  }
}

const store = createStore(reducer)

export default store