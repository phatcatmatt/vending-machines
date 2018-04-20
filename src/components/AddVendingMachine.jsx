import React, { Component } from 'react';
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
    const { addCB } = this.props;
    const { lat, lon } = this.state;
    e.preventDefault();
    
    addCB({lat, lon});
    this.setState({
      isOpen: false,
      lat: '',
      lon: ''
    })
  }

  render() {
    const { isOpen, lat, lon } = this.state;

    return (
      <div className="add-machine-container">
        <div className="add-machine-header">
          <span
            className="icon"
            onClick={() => this.toggleIsOpen()}
          >
            <i className="large material-icons">add_circle</i>
          </span>
        </div>
        <div className="add-machine-card-container">
          {isOpen &&
            <div className="add-machine-card">
              <form onSubmit={e => this.handleSubmit(e)}>
                <h1>new vending machine</h1>
                <div className="machine-card-footer">
                  <div className="add-machine-attributes">
                    <input 
                      min="-90"
                      max="90"
                      type="number"
                      value={lat}
                      onChange={e => this.handleLatChange(e)}
                      placeholder="lat"
                      required
                    />
                    &nbsp;-&nbsp;
                    <input 
                      min="-180"
                      max="180"
                      type="number"
                      value={lon}
                      onChange={e => this.handleLonChange(e)}
                      placeholder="lon"
                      required
                    />
                  </div>
                  <span className="validity"></span>
                  <div className="add-machine-button-container">
                    <button
                      className="button" 
                      type="submit">
                        save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default AddVendingMachine;