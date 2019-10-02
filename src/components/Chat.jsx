import React from "react";

import firebase from "firebase/app";
import "firebase/database";
import firebaseConfig from "../config/firebaseConfig";
firebase.initializeApp(firebaseConfig);
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      userName: "",
      messages: [],
      inputValue: "",
      isInputVaild: false
    };
    this.messageRef = firebase
      .database()
      .ref()
      .child("users");
  }

  handleOnClick = () => {
    if (this.state.inputValue !== "") {
      let newMessage = {
        senderName: this.state.userName,
        text: this.state.inputValue
      };

      this.setState({
        inputValue: ""
      });
      this.messageRef.child(this.state.userName).push(newMessage);
    }
  };
  handleInputChange = e => {
    let invalidCharList = [".", "$", "#", "[", "]", "/"];
    for (let i = 0; i < invalidCharList.length; i++) {
      //console.log("input", e.target.value);
      //console.log("input", char);
      if (e.target.value.includes(invalidCharList[i])) {
        console.log("input invalid");
        this.setState({ isInputVaild: false });
        return;
      }
    }

    this.setState({ isInputVaild: true, inputValue: e.target.value });
  };
  handleKeyPress = e => {
    if (e.key !== "Enter") return;
    this.handleOnClick();
  };
  handleSignIn = e => {
    //when the input name is not empty
    if (this.state.inputValue.length > 0) {
      console.log("customer name", this.state.inputValue);
      //this.listenMessages();

      this.messageRef.child(this.state.inputValue).on("value", message => {
        //console.log(Object.values(message.val()));
        if (message.val()) {
          this.setState({ messages: Object.values(message.val()) });
        }
      });
      this.setState({
        isInputVaild: true,
        loginStatus: true,
        inputValue: "",
        userName: this.state.inputValue
      });
    }
  };
  listenMessages() {
    let userName = this.state.userName;

    console.log("user name is ", userName);
    this.messageRef.child("ray").on("value", message => {
      console.log(Object.values(message.val()));
    });
  }
  componentWillUnmount() {
    this.messageRef.remove();
  }

  render() {
    return (
      <div>
        <h3>Real Time Chat APP</h3>
        <div style={{ backgroundColor: "black", height: "40px" }}>
          <h3 style={{ color: "white" }}>Contact Me</h3>
        </div>
        <ChatWindow
          isInputVaild={this.state.isInputVaild}
          loginStatus={this.state.loginStatus}
          userName={this.state.userName}
          messages={this.state.messages}
          inputValue={this.state.inputValue}
          handleInputChange={this.handleInputChange}
          handleKeyPress={this.handleKeyPress}
          handleOnClick={this.handleOnClick}
          handleSignIn={this.handleSignIn}
        ></ChatWindow>
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
      borderStyle: "solid",
      borderWidth: 0,
      borderRadius: "15px",
      color: "black",
      maxWidth: "70%"
    };
    if (this.props.userName === this.props.senderName) {
      messageTextStyle.backgroundColor = "cornflowerblue";
      messageTextStyle.color = "white";
      messageBodyStyle.alignItems = "flex-end";
      messageBodyStyle.marginRight = "10px";
    } else {
      messageTextStyle.backgroundColor = "#e9e9eb";
      messageBodyStyle.alignItems = "flex-start";
      messageBodyStyle.marginLeft = "10px";
    }
    let newText = this.props.text.split("\n").map((item, i) => {
      return (
        <p style={{ marginBottom: 0 }} key={i}>
          {item}
        </p>
      );
    });
    return (
      <div style={messageBodyStyle}>
        <div className="userName">{this.props.senderName}</div>
        <div style={messageTextStyle}>
          <div
            className="text"
            style={{ marginLeft: "10px", marginRight: "10px" }}
          >
            {newText}
          </div>
        </div>
      </div>
    );
  }
}
class ChatWindow extends React.Component {
  render() {
    if (this.props.loginStatus === true) {
      return (
        <div>
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
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>Hello!</strong> this is a real time one to one chat app.
              You can messmage me and I will reply you if I see the message now.
              Thanks.
              <button
                type="button"
                class="close"
                data-dismiss="alert"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div
              className="messageFlexContainer"
              style={{ display: "flex", flexDirection: "column" }}
            >
              {this.props.messages.map((message, i) => {
                return (
                  <Messages
                    key={i}
                    senderName={message.senderName}
                    text={message.text}
                    userName={this.props.userName}
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
              value={this.props.inputValue}
              onChange={this.props.handleInputChange}
              onKeyPress={this.props.handleKeyPress}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                style={{ borderRadius: "0" }}
                onClick={this.props.handleOnClick}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      let button;
      if (this.props.isInputVaild) {
        button = (
          <button
            className="btn btn-outline-secondary"
            type="button"
            style={{ borderRadius: "0" }}
            onClick={this.props.handleSignIn}
          >
            Sign In
          </button>
        );
      } else {
        button = (
          <button
            className="btn btn-outline-danger"
            type="button"
            style={{ borderRadius: "0" }}
            disabled
          >
            Please enter a valid name
          </button>
        );
      }
      return (
        <div>
          <h3>Please Enter a name</h3>
          <div
            className="input-group mb-3"
            style={{
              alignItems: "stretch !important",
              flexWrap: "wrap",
              display: "flex !important"
            }}
          >
            <input
              type="text"
              className="from-control"
              value={this.props.inputValue}
              onChange={this.props.handleInputChange}
              onKeyPress={this.props.handleKeyPress}
            />
            <div className="input-group-append">{button}</div>
          </div>
          <p style={{ color: "red" }}>
            Note:Name cannot contain., $, #, [, ], /, or ASCII control
            characters 0-31 or 127.
          </p>
        </div>
      );
    }
  }
}
