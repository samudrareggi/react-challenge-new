import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, AddForm } from './pages'
import Nav from './components/Nav.jsx'

function App(props) {
  const [isLogin, setIsLogin] = useState(false)

  const loginHandler = () => {
    setIsLogin(true)
  }

  const logoutHandler = () => {
    setIsLogin(false)
  }

  if (!isLogin) {
    return (
      <React.Fragment>
        <Nav loginHandler={ loginHandler } isLogin={ isLogin } logoutHandler={ logoutHandler } />
        <h1 className="text-center">Please login !</h1>
      </React.Fragment>
    )
  }

  return (
    <>
      <Nav loginHandler={ loginHandler } isLogin={ isLogin } logoutHandler={ logoutHandler } />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route path="/addProduct">
          <AddForm></AddForm>
        </Route>
      </Switch>
    </>
  )
}

export default App