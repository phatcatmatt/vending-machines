import React, { Component } from 'react';
import Login from './components/Login';
import AddVendingMachine from './components/AddVendingMachine';
import VendingMachineList from './components/VendingMachineList';
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
        {!userId ?
          /* TODO: make this a real login and not just an ID */
          <Login 
            loginCB={this.loginCB}
          />
        :
          <div>
            <AddVendingMachine 
              userId={userId}
            />
            <VendingMachineList
              userId={userId}
            />
          </div>
        }
      </div>
    )
  }
}

export default App;
