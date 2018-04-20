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
        <h1>please log in</h1>
          <form 
            className="login-form"
            onSubmit={e => this.handleSubmit(e)}>
            <div>
              <label>User Id: </label>
              {/* TODO: add validation for this input and error messaging */}
              <input 
                type="text"
                value={formValue}
                onChange={e => this.handleChange(e)}
              >
              </input>
            </div>
            <div>
              <button 
                className="button"
                type="submit">
                Login
              </button>
            </div>
          </form>
      </div>
    );
  }
}

export default Login;
