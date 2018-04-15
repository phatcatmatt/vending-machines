import React, { Component } from 'react';
import './VendingMachineCard.css';
import axios from 'axios';
import config from '../config';

class VendingMachineCard extends Component {

  handleDelete() {
    const { userId } = this.props;
    const { id } = this.props

    axios.delete(`${config.baseURL}/${userId}/vending_machines/${id}`)
      .catch(err => {
        //TODO: show an error message
        console.log(err);
      })
  }

  render() {
    const { id, attributes } = this.props;
    return (
      <li className="vending-machine-card">
        <h4>vending machine - {id}</h4>
        <p>Lat: {attributes.latitude}</p>
        <p>Lon: {attributes.longitude}</p>
        <span
          className="icon" 
          onClick={() => this.handleDelete()}>
          <i className="material-icons">delete</i>
        </span>
      </li>
    )
  }
}

export default VendingMachineCard;