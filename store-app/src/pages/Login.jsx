import React from 'react'

function Login(props) {
  return(
    <div className="signin">
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <h1><i className="fas fa-user"></i></h1>
          <h3>Sign In</h3>
        </div>

        <form >
          <h5 v-if="isError" className="text-danger">Couldn't find your Account</h5>
          <input
            required
            v-model="email"
            type="email"
            id="signin"
            className="fadeIn second"
            placeholder="email"
          />
          <input
            required
            v-model="password"
            type="password"
            id="password"
            className="fadeIn third"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth mt-3" value="Sign In" />
        </form>

        <div id="formFooter">
          <a tyle="text-decoration: none" className="underlineHover" href="">Don't have an account? Sign Up</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login