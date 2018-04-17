import config from './config';
import axios from 'axios';

const API = {

  async getAllVendingMachines(userId) {
    try {
      return axios.get(`${config.baseURL}/${userId}/vending_machines`)
    } catch (err) {
      //TODO: add real error handling
      console.warn(err)
    }    
  },
  
  async deleteVendingMachine(id, userId) {
    try {
      return axios.delete(`${config.baseURL}/${userId}/vending_machines/${id}`)
    } catch (err) {
      //TODO: add real error handling
      console.warn(err)
    }
  }


}

export default API;