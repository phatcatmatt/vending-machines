import React, { Component } from 'react';
import VendingMachineCard from './VendingMachineCard'

class VendingMachineList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const { vendingMachines } = this.props;
    const { isLoaded } = this.state;

    //TODO: might need to look into this to make sure it gets updated properly every time
    if (!isLoaded && vendingMachines) {
      this.setState({isLoaded: true});
    }
  }

  render() {
    const { isLoaded } = this.state;
    const { vendingMachines, deleteCB } = this.props;

    if (!isLoaded) {
      return <p>Loading...</p>
    } else if (vendingMachines.length === 0) {
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
                  deleteCB={deleteCB}
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
}

export default VendingMachineList