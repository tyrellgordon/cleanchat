import React, { Component } from 'react';


class MessagingBox extends Component {

  messageHandler = (e) => {

    if (e.keyCode === 13) {

      e.preventDefault()
      this.props.getMessage(e.target.value)
      e.target.value = ""

    }

  }


  render() {
    return (
      <div id="messagingBox">
      <form class='ui form'>
      <textarea onKeyDown={this.messageHandler} placeholder='Write to your buddy...'> </textarea>
      </form>
      </div>


    );
  }
}

export default MessagingBox;
