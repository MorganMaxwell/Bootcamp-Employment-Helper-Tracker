import React, {Component} from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({
  component: Component,
  user,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} user={user} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/"
              }}
            />
          );
        }
      }}
    />
  );
};
