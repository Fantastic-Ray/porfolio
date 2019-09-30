import React, { Component } from "react";
export default class ProjectCard extends Component {
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
            alt="project"
          />
          <div className="card-body">
            <p className="card-text">{this.props.projectText}</p>
            <a
              href={this.props.webLink}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website link
            </a>
            <a
              href={this.props.gitLink}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github link
            </a>
          </div>
        </div>
      </div>
    );
  }
}
