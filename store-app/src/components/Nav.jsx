import React from 'react'
import { Link } from 'react-router-dom'

function Nav(props) {
  let button = null
  if (!props.isLogin) {
    button = <button onClick={ () => props.loginHandler() } className="btn bg-primary">Login</button>
  } else {
    button = [
      <Link to="/favorites" key="fav">
        <span><i className="fa fa-heart text-danger"style={{ cursor: "pointer", fontSize: "2em"}} ></i></span>
      </Link>,
      <button onClick={ () => props.logoutHandler() } className="btn bg-danger" key="log">Logout</button>
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