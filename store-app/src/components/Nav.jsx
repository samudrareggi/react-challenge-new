import React from 'react'

class Nav extends React.Component {
  render() {
    const { login, logout, isLogin } = this.props

    let button
    if (!isLogin) {
      button = <button onClick={ () => login() } className="btn bg-primary">Login</button>
    } else {
      button = <button onClick={ () => logout() } className="btn bg-danger">Logout</button>
    }

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <p className="navbar-brand">Cartally</p>
          { button }
        </div>
      </nav>
    )
  }
}

export default Nav