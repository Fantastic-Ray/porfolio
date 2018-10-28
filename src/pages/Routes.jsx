import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import NavBar from "../components/NavBar";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../Routes.css";
import Footer from "../components/Footer";
export default class Routes extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <div className="App">
            <header>
              <NavBar />
            </header>
            <main>
              <TransitionGroup>
                <CSSTransition
                  in={true}
                  appear={true}
                  key={location.key}
                  classNames="fade"
                  timeout={500}
                >
                  <Switch location={location}>
                    <Route exact path="/home" component={Home} />
                    <Route path="/project" component={Projects} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </main>
            <Footer />
          </div>
        )}
      />
    );
  }
}
