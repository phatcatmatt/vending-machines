import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: ''
    };
  }

  handleChange(e) {
    this.setState({formValue: e.target.value});
  }

  handleSubmit(e) {
    const { formValue } = this.state;
    const { loginCB } = this.props;

    e.preventDefault();
    loginCB(formValue);
  }

  render() {
    const { formValue } = this.state;

    return (
      <div className="login-container">
        <form onSubmit={e => this.handleSubmit(e)}>
          <label>User Id:</label>
          {/* TODO: add validation for this input and error messaging */}
          <input type="text" value={formValue} onChange={e => this.handleChange(e)}></input>
          <button type="submit">
            Login
          </button>
        </form>
        <p>please log in</p>
      </div>
    );
  }
}

export default Login;
