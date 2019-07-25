import {Route,Redirect} from 'react-router-dom';
import React, { Component } from 'react'

export const PrivateRoute = ({ component : Component , Auth , ...rest }) => (
    <Route {...rest} render={(props) => (
        Auth
        ? <Component {...props} />
        : <Redirect to='/StudentSignIn' />
    )} />
  )




