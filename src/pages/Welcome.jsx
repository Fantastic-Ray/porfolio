import React, { Component } from "react";
import "../Welcome.css";
import { Link } from "react-router-dom";
export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0
    };
    this.startTimer = this.startTimer.bind(this);
  }
  componentDidMount() {
    this.startTimer();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  startTimer() {
    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1
        }),
      1000
    );
    console.log("start");
  }
  render() {
    if (this.state.time < 7) {
      return (
        <div style={{ width: "800px", margin: "0 auto", textAlign: "center" }}>
          <h1 id="welcome">Welcome!</h1>
          <div id="name">
            <h2>My Name is Ruigang Gu</h2>
          </div>
          <h3 id="summary">
            This is a react.js project. It is a portfolio about myself.
          </h3>
        </div>
      );
    } else {
      return (window.location = "home");
    }
  }
}
