import React, { Component } from "react";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Skill from "./Skill";
export default class SkillBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillSet: [
        { name: "JavaScript,", level: "100" },
        { name: "ReactJS", level: "100" },
        { name: "HTML5", level: "100" },
        { name: "CSS", level: "75" },
        { name: "jQuery", level: "75" },
        { name: "Bootstrap", level: "75" },
        { name: "Java", level: "75" },
        { name: "Python", level: "50" },
        { name: "SQL", level: "50" }
      ],
      newSkillName: "",
      newSkillLevel: "25",
      inputValue: "",

      validNewSkill: true
    };
  }
  deleteSkill = (index, e) => {
    const skillSet = Object.assign([], this.state.skillSet);
    skillSet.splice(index, 1);
    this.setState({ skillSet: skillSet });
  };
  handleChange = e => {
    e.target.name === "skillName"
      ? this.setState({
          newSkillName: e.target.value,
          inputValue: e.target.value
        })
      : this.setState({ newSkillLevel: e.target.value });
    console.log(this.state.inputValue);
    if (e.target.name === "skillName") {
      //if we find the SkillName in the skillset
      //then we cannot add it to the set

      if (this.validateSkill(e.target.value)) {
        this.setState({ validNewSkill: false });
      } else if (e.target.value === "") {
        this.setState({ validNewSkill: "empty" });
      } else {
        this.setState({ validNewSkill: true });
      }
    }
  };
  validateSkill(skillName) {
    //console.log("skillName", skillName);
    let obj = this.state.skillSet.find(
      obj => obj.name.toUpperCase() == skillName.toUpperCase()
    );
    //console.log("obj", obj);
    return obj;
  }
  addSkill = () => {
    if (this.state.newSkillName != "") {
      this.state.skillSet.push({
        name: this.state.newSkillName,
        level: this.state.newSkillLevel
      });
      this.state.inputValue = "";
      this.state.newSkillName = "";
      this.setState({});
    }
  };
  render() {
    let button;
    if (this.state.validNewSkill) {
      button = (
        <button
          type="button"
          className="btn btn-outline-dark btn-block"
          onClick={this.addSkill.bind(this)}
        >
          Add a new skill
        </button>
      );
    } else if (this.state.validNewSkill === false) {
      button = (
        <button
          type="button"
          className="btn btn-outline-danger btn-block"
          disabled
        >
          Skill already exists
        </button>
      );
    }
    return (
      <div /*style={{ width: 250 }}*/>
        <h2>Skills</h2>
        {this.state.skillSet.map((skill, index) => (
          <Skill
            key={skill.name}
            skillName={skill.name}
            skillLevel={skill.level}
            handleDelete={this.deleteSkill.bind(this, index)}
          />
        ))}
        <hr className="my-4" />
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Text input with segmented dropdown button"
            name="skillName"
            value={this.state.inputValue}
            placeholder="Enter a SKill"
            onChange={this.handleChange}
          />
          <select
            className="custom-select"
            id="inputGroupSelect02"
            name="levelSelector"
            onChange={this.handleChange}
          >
            <option value="25">Beginner</option>
            <option value="50">Advanced</option>
            <option value="75">Expert</option>
            <option value="100">God</option>
          </select>
        </div>
        {button}
        <div>
          <b>Note: </b>
          <p>
            Welcome to play around with this component. Try to add a duplicated
            skill.
          </p>
        </div>
      </div>
    );
  }
}
