import React, { Component } from 'react';
import VendingMachineCard from './VendingMachineCard'
import config from '../config'
import axios from 'axios';

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

    axios.get(`${config.baseURL}/${userId}/vending_machines`)
      .then(res => {
        this.setState({
          isLoaded: true,
          vendingMachines: res.data.data
        })

      })
      .catch(err => {
        this.setState({
          isLoaded: true
        })
        //TODO: show users an error message
        console.log(err);
      })
  }

  render() {
    const { isLoaded, vendingMachines } = this.state;
    const { userId } = this.props;

    const renderVendingMachines = () => {
      if (vendingMachines.length === 0) {
        return <p>add a vending machine to get started</p>
      } else {
        return (
          <ul>
            {vendingMachines.map(v => {
              return (
                <VendingMachineCard 
                  key={v.id} 
                  userId={userId}
                  {...v}
                />
              )
            })
            }
          </ul>
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