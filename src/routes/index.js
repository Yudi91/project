import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Component
} from "react-router-dom";

import About from "../pages/about";
import Login from "../pages/login";
import Register from "../pages/register";

// Data
import DataShow from "../pages/dashboard/data/show";
import DataCreate from "../pages/dashboard/data/create";
import DataUpdate from "../pages/dashboard/data/update";

// User
import UserShow from "../pages/dashboard/user/show";
import UserUpdate from "../pages/dashboard/user/update";

// 404
import NotFound from "../pages/notFound";

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      false ? <Redirect to="/login" /> : <Component {...props} />
    )} />
  );
}

const Routers = () => {
  return (
    <Router>
      <div>
        <Switch>
          {/* Public */}
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="*" component={NotFound} /> */}

          {/* Dashboard */}
          <Route path="/data">
            <PrivateRoute exact path="/data/show" component={DataShow} />
            <PrivateRoute exact path="/data/create" component={DataCreate} />
            <PrivateRoute exact path="/data/update" component={DataUpdate} />
          </Route>

          <Route path="/user">
            <PrivateRoute exact path="/user/show" component={UserShow} />
            <PrivateRoute exact path="/user/update" component={UserUpdate} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Routers;
