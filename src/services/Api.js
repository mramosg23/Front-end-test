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
    return this.init().get(`/api/product`);
  };

  getDetail = (id) => {
    return this.init().get(`/api/product/${id}`);
  };

  addToCart = (data) => {
    return this.init().post(`/api/cart`, data);
  };
}