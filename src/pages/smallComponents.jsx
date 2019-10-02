import React, { Component } from "react";
//import ToDoArea from "../components/TodoList";
import Chat from "../components/Chat";
export default class SmallComponents extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "20px" }}>
          <Chat />
        </div>
      </div>
    );
  }
}
