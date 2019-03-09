import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
