import React, { Component } from 'react';
import Login from './components/Login'
import VendingMachineList from './components/VendingMachineList'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: ''
    };
  }

  //TODO: move login to a user service and store userId on the window or something
  loginCB = (userId) => {
    this.setState({userId});
  }

  render() {
    const { userId } = this.state;

    return (
      <div className="App">
        {!userId &&
          <div>
            {/* TODO: make this a real login and not just an ID */}
            <Login 
              loginCB={this.loginCB}
            />
            <p>please log in to get started</p>
          </div>
        }
        
        {/* show only if user is "logged in" */}
        {userId &&
          <VendingMachineList 
            userId={userId}
          />
        }
      </div>
    );
  }
}

export default App;
