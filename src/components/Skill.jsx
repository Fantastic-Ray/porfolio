import React, { Component } from "react";

export default class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skillName: props.skillName,
      skillLevel: props.skillLevel
    };
  }

  render() {
    var level = this.state.skillLevel + "%";
    return (
      <React.Fragment>
        <div>{this.state.skillName}</div>
        <div className="row">
          <div className="col-sm-10">
            <div className="progress" style={{ transform: "translateY(50%)" }}>
              <div
                className="progress-bar "
                role="progressbar"
                style={{ width: level }}
                aria-valuenow={this.state.skillLevel}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {levelConvert(this.state.skillLevel)}
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <button
              type="button"
              className="btn btn-outline-dark btn-sm"
              onClick={this.props.handleDelete}
            >
              X
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
function levelConvert(level) {
  let result;
  //console.log("convert ", level);
  switch (level) {
    case "25":
      result = "Beginner";
      break;
    case "50":
      result = "Advanced";
      break;
    case "75":
      result = "Expert";
      break;
    case "100":
      result = "God";
      break;
    default:
      result = "Beginner";
      break;
  }
  //console.log("convert ", result);
  return result;
}
