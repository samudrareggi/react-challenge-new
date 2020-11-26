import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Nav(props) {
  const isLogin = useSelector((state) => state.isLogin)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch({
      type: 'LOGIN_HANDLER',
      payload: false
    })
  }

  let button = null
  if (!isLogin) {
    button = <Link to="/login" className="btn bg-primary">Login</Link>
  } else {
    button = [
      <Link to="/favorites" key="fav">
        <span><i className="fa fa-heart text-danger"style={{ cursor: "pointer", fontSize: "2em"}} ></i></span>
      </Link>,
      <button onClick={ () => logoutHandler() } className="btn bg-danger" key="log">Logout</button>
    ]
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Cartally</Link>
        { button }
      </div>
    </nav>
  )
}

export default Nav