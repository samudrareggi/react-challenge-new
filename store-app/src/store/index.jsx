import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  products: [],
  product: [],
  favorites: [],
  isLogin: false,
  addFavLoading: false
}

export function FetchProducts(url) {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
          dispatch({
            type: 'FETCH_PRODUCTS',
            payload: data
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function DetailProduct(url) {
  return (dispatch) => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
          dispatch({
            type: 'DETAIL_PRODUCT',
            payload: data
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

function reducer(state= initialState, action) {
  switch (action.type) {
    case 'LOGIN_HANDLER':
      return {...state, isLogin: action.payload}

    case 'DETAIL_PRODUCT':
      return {...state, product: action.payload}

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store