export default class AppService {
  _apiBase = 'https://swapi.co/api';

  constructor(endpoint) {
    this.endpoint = endpoint
  }

  async read (id = '') {
    const response = await fetch(`${this._apiBase}${this.endpoint}${id}`);
    if(!response.ok) {
      throw new Error(`Could not fetch ${id}, received ${response.status}`)
    }
    const body = await response.json();
    return body;
  };

  async list() {
    const response = await this.read();
    return response.results
  }
}