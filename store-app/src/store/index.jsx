import { createStore } from 'redux'

const initialState = {
  products: [],
  favorites: []
}

function reducer(state= initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      const payload = state.products.concat(action.payload)
      return {...state, products: payload}
  
    default:
      return state
  }
}

const store = createStore(reducer)

export default store