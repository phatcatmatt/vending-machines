import React, { Component } from 'react';
import Login from './components/Login'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    };
  }

  //TODO: move login to a user service
  loginCB = (userId) => {
    this.setState({userId});
  }

  render() {
    const { userId } = this.state;

    return (
      <div className="App">
        <Login 
          userId={userId}
          loginCB={this.loginCB}
        />
        
        {/* show only if user is "logged in" */}
        {userId &&
          <div>
            logged in!
          </div>
        }
      </div>
    );
  }
}

export default App;
