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

    return (
      <div>
        {!isLoaded ?
          <p>loading...</p>
        :
          <ul>
            {vendingMachines.map(v => {
              return (
                <VendingMachineCard 
                  key={v.id} 
                  {...v}
                />
              )
            })
            }
          </ul>
        }
      </div>
    )
  }
}

export default VendingMachineList