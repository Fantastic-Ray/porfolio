import React, { Component } from "react";
export default class NewProjectModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectTitle: "",
      projectImage: null,
      projectText: "",
      webLink: "",
      gitLink: ""
    };
  }
  handleImageChange(e) {
    let reader = new FileReader();
    let file = e.target.files[0];
  }
  submitProject = () => {
    this.props.callbackFromParent(this.state);
  };
  handleInput = e => {
    if (e.target.name === "titleInput") {
      this.setState({ projectTitle: e.target.value });
      console.log("projectTitle", e.target.value);
    } else if (e.target.name === "descriptionInput") {
      this.setState({ projectText: e.target.value });
      //console.log("this.state.projectTitle", this.state.projectText);
    } else if (e.target.name === "webInput") {
      this.setState({ webLink: e.target.value });
      //console.log("this.state.projectTitle", this.state.webLink);
    } else if (e.target.name === "gitInput") {
      this.setState({ gitLink: e.target.value });
      //console.log("this.state.projectTitle", this.state.gitLink);
    }
  };
  render() {
    return (
      <div
        className="modal fade"
        id="newProjectModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalCenterTitle">
                  Add a new project
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Project Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleInput"
                    placeholder="Enter Title"
                    onChange={this.handleInput}
                    name="titleInput"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">
                    Project Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Enter Description"
                    onChange={this.handleInput}
                    name="descriptionInput"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Project Link</label>
                  <input
                    type="text"
                    className="form-control"
                    id="webInput"
                    placeholder="Enter project link"
                    onChange={this.handleInput}
                    name="webInput"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Git Link</label>
                  <input
                    type="text"
                    className="form-control"
                    id="gitInput"
                    placeholder="Enter Git link"
                    onChange={this.handleInput}
                    name="gitInput"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlFile1">Project Image</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="exampleFormControlFile1"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.submitProject}
                  data-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
