import React, { Component } from 'react';
import config from '../config'
import axios from 'axios';

class VendingMachineList extends Component {

  componentDidMount() {
    const { userId } = this.props;

    //TODO: add loading icon while data fetches
    axios.get(`${config.baseURL}/${userId}/vending_machines`)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        //TODO: show users an error message
        console.log(error);
      })
  }

  render() {

    return (
      <div>
        your vending machines
      </div>
    )
  }
}

export default VendingMachineList