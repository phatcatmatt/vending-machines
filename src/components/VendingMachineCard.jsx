import React, { Component } from 'react';
import './VendingMachineCard.css';

class VendingMachineCard extends Component {

  render() {
    const { id, attributes, deleteCB, userId } = this.props;
    return (
      <li className="vending-machine-card">
        <h4>vending machine - {id}</h4>
        <p>Lat: {attributes.latitude}</p>
        <p>Lon: {attributes.longitude}</p>
        <span
          className="icon" 
          onClick={() => deleteCB(id, userId)}>
          <i className="material-icons">delete</i>
        </span>
      </li>
    )
  }
}

export default VendingMachineCard;