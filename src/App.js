import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";

import "./Routes.css";
import Routes from "./pages/Routes";
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route component={Routes} />
      </Switch>
    );
  }
}

export default App;
