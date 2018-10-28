import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default class NavBar extends Component {
  render() {
    return (
      <ul
        className="nav fixed-top"
        style={{ margin: "10px", backgroundColor: "white", width: "350px" }}
      >
        <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/project">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    );
  }
}
