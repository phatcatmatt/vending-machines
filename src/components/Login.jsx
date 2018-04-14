import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    };
  }

  handleChange(e) {
    this.setState({userId: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('logging in...', this.state.userId);
  }

  render() {
    return (
      <div className="login-container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>User Id:</label>
          {/* TODO: add validation for this input and error messaging */}
          <input type="text" value={this.state.userId} onChange={e => this.handleChange(e)}></input>
          <button type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
