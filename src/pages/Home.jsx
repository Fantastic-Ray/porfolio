import React, { Component } from "react";
import SkillBar from "../components/SkillBar";
import "../Home.css";
import ExperienceBar from "../components/ExperienceBar";
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="banner">
          <div className="bannerContent">
            <h1>Ruigang Gu</h1>
            <h2>Front-end Developer</h2>
            <h5>
              2 years experience in E-Commerce management and web development.
            </h5>
            <h5> Look for a full-time web developer position.</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <SkillBar />
          </div>
          <div className="col-sm-8">
            <ExperienceBar />
          </div>
        </div>
      </div>
    );
  }
}
