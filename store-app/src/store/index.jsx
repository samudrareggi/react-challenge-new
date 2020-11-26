import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const productsState = {
  products: [],
  product: [],
  favorites: [],
  productsLoading: true,
  detailLoading: false
}

const loginState = {
  isLogin: false,
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
      .finally(() => {
        dispatch({
          type: 'SET_PRODUCTS_LOADING',
          payload: false
        })
      })
  }
}

export function DetailProduct(url) {
  return (dispatch) => {
    dispatch({
      type: 'SET_DETAIL_LOADING',
      payload: true
    })
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
      .finally(() => {
        dispatch({
          type: 'SET_DETAIL_LOADING',
          payload: false
        })
      })
  }
}
function loginReducer(state = loginState, action) {
  switch (action.type) {
    case 'LOGIN_HANDLER':
      return {...state, isLogin: action.payload}

    default:
    return state
  }
}
function productsReducer(state = productsState, action) {
  switch (action.type) {
    case 'SET_PRODUCTS_LOADING':
      return {...state, productsLoading: action.payload}

    case 'SET_DETAIL_LOADING':
      return {...state, detailLoading: action.payload}

    case 'DETAIL_PRODUCT':
      return {...state, product: action.payload}

    case 'FETCH_PRODUCTS':
      return {...state, products: action.payload}

    case 'SEARCH_PRODUCTS':
      const query = state.products.filter(product => (product.title.toLowerCase().includes(action.payload.toLowerCase())))
      return {...state, products: query}

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

const combined = combineReducers({ loginReducer, productsReducer })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combined,
  composeEnhancers(applyMiddleware(thunk))
)

export default store