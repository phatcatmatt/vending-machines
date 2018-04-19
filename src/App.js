import React, { Component } from 'react';
import API from './api';
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

  async addVendingMacine(machineAttributes) {
    const { userId } = this.state;
    try { 
      await API.saveVendingMachine(userId, machineAttributes);
      this.getMachines(userId);
    } catch (err) {
      //TODO: add real error handling
      console.warn('Could not save vending machine!', err);
    }
  }

  async getMachines(userId) {
    try {
      const res = await API.getAllVendingMachines(userId)
      const vendingMachines = res.data.data;
      this.setState({
        // isLoaded: true,
        vendingMachines
      })
    } catch (err) {
      //TODO: add real error handling
      console.warn('Could not load vending machines!', err);
    }
  }

  async deleteVendingMachine(machineId) {
    const { userId } = this.state;
    try {
      await API.deleteVendingMachine(machineId, userId)
      this.getMachines(userId)
    } catch (err) {
      //TODO: add real error handling
      console.warn('Could not delete vending machine!', err);
    }
  }

  //TODO: move login to a user service and store userId on the window or something
  loginCB = (userId) => {
    this.setState({userId});
    this.getMachines(userId)
  }

  render() {
    const { userId, vendingMachines } = this.state;
  
    return (
      <div className="App">
        {!userId ?
          /* TODO: make this a real login with validation and not just an ID */
          <Login 
            loginCB={this.loginCB}
          />
        :
          <div>
            <AddVendingMachine 
              addCB={machineAttributes => this.addVendingMacine(machineAttributes)}
            />
            <VendingMachineList
              vendingMachines={vendingMachines}
              deleteCB={machineId => this.deleteVendingMachine(machineId)}
            />
          </div>
        }
      </div>
    )
  }
}

export default App;
