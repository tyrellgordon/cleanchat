import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login'
import MessagingPanel from './MessagingPanel'

class App extends Component {

  state = {
    username: null
  }

  setUsername = (username) => {



    this.setState({username})

  }


  render() {
    return (


      <div className="App">

      {
          !this.state.username ?
            <Login setUsername={this.setUsername}/>
            :
            <MessagingPanel username={this.state.username}/>

      }

      </div>
    );
  }
}

export default App;

// - App
//   -Login
//   -MessagingPanel
//     -DisplayConversation
//     -MessagingBox
//
