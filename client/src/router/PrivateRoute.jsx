import React from 'react'
import { Route } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = ({ children, ...rest }) => {
  const session = useSelector(store => store.auth)  // session = { isLogin, user }
  return (
    <Route { ...rest } render={({ location }) => 
        session.user ? 
        children : 
        <Redirect to={{
            pathname : "/login",
            state : { from : location }
        }} />
    } />
  )
}

export default PrivateRoute