import React, { Component } from 'react';
import './VendingMachineCard.css';

class VendingMachineCard extends Component {

  render() {
    const { id: machineId, attributes, deleteCB } = this.props;
    return (
      <li className="vending-machine-card">
        <div className="header-row">
        {/* TODO: add a sequential ID next to the machine so it says Vending Machine #123 */}
          <h1>vending machine</h1>
          <span
            className="icon" 
            onClick={() => deleteCB(machineId)}>
            <i className="material-icons">delete</i>
          </span>
        </div>
        <div className="machine-attributes">
        {/* TODO: is this formatted right? Are they degrees with North and South etc? */}
          <p>{attributes.latitude} - {attributes.longitude}</p>
        </div>
      </li>
    )
  }
}

export default VendingMachineCard;