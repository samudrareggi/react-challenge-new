import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { debounce } from "lodash"
import { FetchProducts } from '../store'

function Nav(props) {
  const isLogin = useSelector((state) => state.loginReducer.isLogin)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch({
      type: 'LOGIN_HANDLER',
      payload: false
    })
  }

  const searchDebounce = debounce((event) => {
    dispatch(FetchProducts('https://fakestoreapi.com/products'))
    setTimeout(() => {
      dispatch({
        type: 'SEARCH_PRODUCTS',
        payload: event.target.value
      })
    }, 3000)
  }, 300)

  let button = null
  if (!isLogin) {
    button = <Link to="/login" data-testid="login-link" className="btn bg-primary">Login</Link>
  } else {
    button = [
      <input onChange={searchDebounce} key="search" className="form-control mr-sm-2 col" type="search" placeholder="Search" style={{ width: "300px" }}></input>,
      <Link to="/favorites" key="fav">
        <span><i className="fa fa-heart text-danger col-2" style={{ cursor: "pointer", fontSize: "2em" }} ></i></span>
      </Link>,
      <button onClick={() => logoutHandler()} className="btn bg-danger" key="log">Logout</button>
    ]
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link data-testid="brand-link" to="/" className="navbar-brand col-1">Cartally</Link>
        {button}
      </div>
    </nav>
  )
}

export default Nav