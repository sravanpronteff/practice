import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.changeMessage = this.changeMessage.bind(this);
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "thankyou for subscribing",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Subscribe</button>
        <button onClick={() => this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
