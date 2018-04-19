import config from './config';
import axios from 'axios';

const API = {

  async getAllVendingMachines(userId) {
    try {
      return await axios.get(`${config.baseURL}/${userId}/vending_machines`);
    } catch (err) {
      //TODO: add real error handling
      console.warn(err);
    }    
  },
  
  async deleteVendingMachine(id, userId) {
    try {
      return await axios.delete(`${config.baseURL}/${userId}/vending_machines/${id}`)
    } catch (err) {
      //TODO: add real error handling
      console.warn(err);
    }
  },

  async saveVendingMachine(userId, machineAttributes) {
    const { lat, lon } = machineAttributes;
    const payload = {
      "vending_machine": {
        "longitude": lon,
        "latitude": lat
      }
    };
    try {
      return await axios.post(`${config.baseURL}/${userId}/vending_machines`, payload);
    } catch (err) {
      //TODO: add real error handling
      console.warn(err);
    }

  }


}

export default API;