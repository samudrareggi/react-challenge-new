import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, AddForm, ProductDetail, Favorite } from './pages'
import Nav from './components/Nav.jsx'
import { useSelector } from 'react-redux'

function App(props) {
  const isLogin = useSelector((state) => state.isLogin)
  if (!isLogin) {
    return (
      <React.Fragment>
        <Nav/>
        <h1 className="text-center mt-5">Please login !</h1>
      </React.Fragment>
    )
  }

  return (
    <>
      <Nav/>
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
        <Route path="/favorites">
          <Favorite></Favorite>
        </Route>
        <Route path={`/:id`}>
          <ProductDetail/>
        </Route>
      </Switch>
    </>
  )
}

export default App