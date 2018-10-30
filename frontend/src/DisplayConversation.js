import React, { Component } from 'react';


class DisplayConversation extends Component {


  displayMessage = () => this.props.messages.map((message) => {

  return  <div class='ui floating message'> {message.username} : {message.message} </div>

  })




  render() {
    return (
      <div id="displayConversation">
          {this.displayMessage()}
      </div>
    );
  }
}

export default DisplayConversation;
