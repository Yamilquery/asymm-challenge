import * as axios from 'axios';

export default class Api {
  constructor() {
    this.client = null;
    this.api_url = process.env.REACT_APP_API_URL;
    this.api_key = process.env.REACT_APP_API_KEY;
  }

  init = () => {
    let headers = {
      Accept: "application/json"
    };

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers
    });

    return this.client;
  }

  getIngredients = (params) => this.init().get(`search?apiKey=${this.api_key}`, { params });
  
  getIngredientDetails = (id) => this.init().get(`${id}/information?apiKey=${this.api_key}`);
  
}