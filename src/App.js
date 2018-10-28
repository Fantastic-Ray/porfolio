import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
