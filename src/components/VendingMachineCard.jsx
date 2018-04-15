import React, { Component } from 'react';
import './VendingMachineCard.css';

class VendingMachineCard extends Component {

  render() {
    const { id, attributes } = this.props;
    return (
      <li className="vending-machine-card">
        <h4>vending machine - {id}</h4>
        <p>{attributes.latitude}</p>
        <p>{attributes.longitude}</p>
      </li>
    )
  }
}

export default VendingMachineCard;