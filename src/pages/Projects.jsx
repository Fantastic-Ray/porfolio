import React, { Component } from "react";
import freeupLogo from "../images/freeup.gif";
import TimetecImg1 from "../images/timetec1.gif";
import TimetecImg2 from "../images/timetec2.gif";
import ProjectCard from "../components/Card";
import NewProjectModal from "../components/newProjectModal";
export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          projectTitle: "Javascript Project - Management Tool",
          projectImage: TimetecImg1,
          projectText:
            "A web app designed for fast information processing with JavaScript, HTML5, CSS, jQuery, PHP, Firebase(Database) and Google Spreadsheet API.",
          webLink: "https://timetecinctool.com",
          gitLink: "https://github.com/timetecinc/timetecinc.github.io"
        },
        {
          projectTitle: "React Project - Management Tool",
          projectImage: TimetecImg2,
          projectText:
            "This is the react version of the Management Tool and hosted by AWS",
          webLink: "http://timetecincreact.com",

          gitLink: "https://github.com/Fantastic-Ray/timetec-react"
        },
        {
          projectTitle: "Javascript Project - Free Up",
          projectImage: freeupLogo,
          projectText:
            "A website created with JavaScript and JQuery for combining agroup of people’s schedules and visualizing free time among them.",
          webLink: "https://rrecatto.github.io",
          gitLink: "https://github.com/rrecatto/rrecatto.github.io"
        }
      ]
    };
  }
  myCallback = data => {
    console.log("project data", data);
    this.state.projects.push(data);
    this.setState({});
  };
  render() {
    let FloatButton = (
      <button
        href="#"
        className="float"
        data-toggle="modal"
        data-target="#newProjectModal"
      >
        +
      </button>
    );
    return (
      <div>
        {this.state.projects.map(project => (
          <ProjectCard
            key={project.projectTitle}
            projectTitle={project.projectTitle}
            projectImage={project.projectImage}
            projectText={project.projectText}
            webLink={project.webLink}
            gitLink={project.gitLink}
          />
        ))}
        {FloatButton}
        <NewProjectModal callbackFromParent={this.myCallback.bind(this)} />
      </div>
    );
  }
}
