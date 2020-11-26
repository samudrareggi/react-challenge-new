import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Home, AddForm, ProductDetail, Favorite, Login } from './pages'
import { useSelector } from 'react-redux'
import Nav from './components/Nav.jsx'

function App(props) {
  const isLogin = useSelector((state) => state.loginReducer.isLogin)

  return (
    <>
      <Nav/>
      <Switch>
        <Route exact path="/">
          {isLogin ? <Home/> : <Redirect to="/login" />}
        </Route>
        <Route path="/login">
          {isLogin ? <Redirect to="/"/> : <Login/>}
        </Route>
        <Route path="/addProduct">
          {isLogin ? <AddForm/> : <Redirect to="/login" />}
        </Route>
        <Route path="/favorites">
          {isLogin ? <Favorite/> : <Redirect to="/login" />}
        </Route>
        <Route path={`/:id`}>
          {isLogin ? <ProductDetail/> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </>
  )
}

export default App