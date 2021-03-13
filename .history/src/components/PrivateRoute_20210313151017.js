import React from 'react'
import  { Route } from 'react-router-dom';
imp

export default function PrivateRoute( { component: Component, ...rest}) {
    return (
        <Route
        {...rest}
        render={props => {
          return currentUser ? <Component {...props} /> : <Redirect to="/login" />
        }}
      ></Route>
    )
}
