import * as axios from 'axios';

/**
 * Api client
 * This Api class is connected to axios and provides a client to manage the API requests.
 *
 * An environment variable REACT_APP_API_ENDPOINT, needs to be provided in order
 * to configure correctly.
 * 
 * Get all the ingredients example: 
 * 
 * ```js
 * import Api from './api';
 * const api = new Api();
 * api.getIngredients({ query: 'banana' }).then(
 *  (response) => console.log(response.data.results)
 * );
 * // This will return a response with the Array of ingredients objects
 * ```
 * 
 * Get information of an ingredient example: 
 * 
 * ```js
 * import Api from './api';
 * const api = new Api();
 * api.getIngredients(12345).then(
 *  (response) => console.log(response.data)
 * );
 * // This will return a response with the object of the specified ingredient
 * ```
 */
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