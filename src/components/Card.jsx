import React, { Component } from "react";
export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <div
          className="card"
          style={{ width: "30rem", display: "inline-block" }}
        >
          <div className="card-header">
            <b>{this.props.projectTitle}</b>
          </div>
          <img
            className="card-img-top"
            src={this.props.projectImage}
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title" />
            <p className="card-text">{this.props.projectText}</p>
            <a href={this.props.webLink} className="card-link">
              Website link
            </a>
            <a href={this.props.gitLink} className="card-link">
              Github link
            </a>
          </div>
        </div>
      </div>
    );
  }
}
