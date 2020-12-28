import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import '../Login.css'

function Login(props) {
  const dispatch = useDispatch()

  const submitHandler = (event) => {
    event.preventDefault()

    dispatch({
      type: 'LOGIN_HANDLER',
      payload: true
    })
  }
  return(
    <div className="login">
    <div className="wrapper fadeInDown">
      <div data-testid="login-content" id="formContent">
        <div className="fadeIn first">
          <h1><i className="fa fa-user"></i></h1>
          <h3>Login</h3>
        </div>

        <form onSubmit={ (event) => submitHandler(event) }>
          <input
            type="text"
            id="signin"
            className="fadeIn second"
            placeholder="username"
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth mt-3" value="Login" />
        </form>

        <div id="formFooter">
          <Link to="/register" className="underlineHover" style={{ textDecoration: "none" }}>Don't have an account? Sign Up</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login