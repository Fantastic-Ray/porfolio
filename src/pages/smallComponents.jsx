import React, { Component } from "react";
import ToDoArea from "../components/TodoList";
import Chat from "../components/Chat";
export default class SmallComponents extends Component {
  render() {
    return (
      <div className="container">
        <ToDoArea />
        <Chat />
      </div>
    );
  }
}
