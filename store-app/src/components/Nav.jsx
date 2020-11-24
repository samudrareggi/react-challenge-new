import React from 'react'

function Nav(props) {
  let button = null
  if (!props.isLogin) {
    button = <button onClick={ () => props.loginHandler() } className="btn bg-primary">Login</button>
  } else {
    button = [
      <button className="btn bg-success mr-2">Cart</button>,
      <button onClick={ () => props.logoutHandler() } className="btn bg-danger">Logout</button>
    ]
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <p className="navbar-brand">Cartally</p>
        <div>
          { button }
        </div>
      </div>
    </nav>
  )
}

export default Nav