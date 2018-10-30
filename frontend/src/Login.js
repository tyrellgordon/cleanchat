import React, { Component } from 'react';


class Login extends Component {

login = (e) => {
  e.preventDefault()

    this.props.setUsername(e.target.username.value)

}



  render() {
    return (
      <div id="login">
      <form class="ui form" onSubmit={this.login}>
        <label>Username:</label><br/>
        <div class="field">
        <input type="text" id="username"/><br/>
        </div>
        <input type="submit" value="Log In"/>
      </form>

      </div>
    );
  }
}

export default Login;
