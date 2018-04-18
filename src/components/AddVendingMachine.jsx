import React, { Component } from 'react';
import API from '../api';
import './AddVendingMachine.css';

class AddVendingMachine extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: false,
      lat: '',
      lon: ''
    }
  }

  toggleIsOpen() {
    const { isOpen } = this.state;
    this.setState({isOpen: !isOpen});
  }

  handleLatChange(e) {
    this.setState({lat: e.target.value});
  }

  handleLonChange(e) {
    this.setState({lon: e.target.value});
  }

  async handleSubmit(e) {
    const { userId } = this.props;
    const { lat, lon } = this.state;
    e.preventDefault();
    try { 
      await API.saveVendingMachine({
        userId,
        lat,
        lon
      })
    } catch (err) {
      //TODO: add real error handling
      console.warn('Could not save vending machine!', err);
    }

  }

  render() {
    const { isOpen, lat, lon } = this.state;

    return (
      <div>
        <span
          className="icon"
          onClick={() => this.toggleIsOpen()}
        >
          <i className="material-icons">add_circle</i>
        </span>
        <div>
          {isOpen &&
            <div className="add-machine-card">
              <form onSubmit={e => this.handleSubmit(e)}>
                <input 
                  min="-90"
                  max="90"
                  type="number"
                  value={lat}
                  onChange={e => this.handleLatChange(e)}
                  placeholder="lat"
                  required
                />
                <input 
                  min="-180"
                  max="180"
                  type="number"
                  value={lon}
                  onChange={e => this.handleLonChange(e)}
                  placeholder="lon"
                  required
                />
                <span className="validity"></span>
                <button type="submit">
                  Save
                </button>
              </form>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default AddVendingMachine;