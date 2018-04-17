import React, { Component } from 'react';
import VendingMachineCard from './VendingMachineCard'
import API from '../api';

class VendingMachineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      vendingMachines: []
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    this.getMachines(userId);
  }
  
  async getMachines(userId) {
    try {
      const res = await API.getAllVendingMachines(userId)
      const vendingMachines = res.data.data;
      this.setState({
        isLoaded: true,
        vendingMachines
      })
    } catch (err) {
      //TODO: add real error handling
      console.warn('Could not load vending machines!', err);
    }
  }

  async deleteVendingMachine(id, userId) {
    try {
      await API.deleteVendingMachine(id, userId)
      this.getMachines(userId)
    } catch (err) {
      //TODO: add real error handling
      console.warn('Could not delete vending machine!', err);
    }
  }

  render() {
    const { isLoaded, vendingMachines } = this.state;
    const { userId } = this.props;

    const renderVendingMachines = () => {
      if (vendingMachines.length === 0) {
        return <p>add a vending machine to get started</p>
      } else {
        return (
          <div>
            <h4>your vending machines</h4>
            <ul>
              {vendingMachines.map(v => {
                return (
                  <VendingMachineCard 
                    key={v.id} 
                    deleteCB={() => this.deleteVendingMachine(v.id, userId)}
                    userId={userId}
                    {...v}
                  />
                )
              })
              }
            </ul>
          </div>
        )
      }
    }

    return (
      <div>
        {!isLoaded ?
          <p>loading...</p>
        :
          renderVendingMachines()
        }
      </div>
    )
  }
}

export default VendingMachineList