import * as axios from "axios";

export default class Api {
  constructor() {
    this.client = null;
    this.url = 'https://front-test-api.herokuapp.com/';
  }

  init = () => {
    let headers = {
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: this.url,
      timeout: 40000,
      headers: headers,
    });

    return this.client;
  };

  getItems = () => {
    return this.init().get("/api/product");
  };

}