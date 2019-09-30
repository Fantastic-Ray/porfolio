import React from "react";

import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "../config/firebaseConfig";
firebase.initializeApp(firebaseConfig);
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 2,
      messages: [
        { fromMe: true, text: "hello", id: 0 },
        { fromMe: false, text: "hello", id: 1 }
      ],
      inputValue: ""
    };
    this.messageRef = firebase
      .database()
      .ref()
      .child("message");
  }

  handleOnClick = () => {
    let id = this.state.id;
    if (this.state.inputValue !== "") {
      let newMessageList = this.state.messages;
      let newMessage = {
        fromMe: true,
        text: this.state.inputValue,
        id: id++
      };
      newMessageList.push(newMessage);
      this.setState({
        messages: newMessageList,
        inputValue: "",
        id: id++
      });
      this.messageRef.push(newMessage);
    }
  };
  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };
  handleKeyPress = e => {
    if (e.key !== "Enter") return;
    this.handleOnClick();
  };
  render() {
    return (
      <div>
        <h3>Real Time Chat APP</h3>
        <div style={{ backgroundColor: "black", height: "40px" }}>
          <h3 style={{ color: "white" }}>Contact Me</h3>
        </div>
        <div
          className="messageOutterFlexContainer"
          style={{
            borderStyle: "solid",
            borderWidth: " 1px 1px 0px 1px",
            height: "500px",
            overflow: "auto"
          }}
        >
          <div
            className="messageFlexContainer"
            style={{ display: "flex", flexDirection: "column" }}
          >
            {this.state.messages.map(message => {
              return (
                <Messages
                  key={message.id}
                  fromMe={message.fromMe}
                  text={message.text}
                />
              );
            })}
          </div>
        </div>
        <div
          className="input-group mb-3"
          style={{
            width: "100% !important",
            alignItems: "stretch !important",
            flexWrap: "wrap",
            display: "flex !important"
          }}
        >
          <input
            type="text"
            className="from-control"
            style={{ flex: "1 1 auto" }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              style={{ borderRadius: "0" }}
              onClick={this.handleOnClick}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}
class Messages extends React.Component {
  render() {
    let messageBodyStyle = {
      display: "flex",
      flexDirection: "column"
    };
    let messageTextStyle = {
      height: "30px",
      borderStyle: "solid",
      borderRadius: "15px",
      color: "white"
    };
    if (this.props.fromMe) {
      messageTextStyle.backgroundColor = "cornflowerblue";
      messageBodyStyle.alignItems = "flex-end";
      messageBodyStyle.marginRight = "10px";
    } else {
      messageTextStyle.backgroundColor = "orangered";
      messageBodyStyle.alignItems = "flex-start";
      messageBodyStyle.marginLeft = "10px";
    }

    return (
      <div style={messageBodyStyle}>
        <div className="userName">Users</div>
        <div style={messageTextStyle}>
          <div
            className="text"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}
