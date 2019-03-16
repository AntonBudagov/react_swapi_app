import AppService from './app';

export default class Planet extends AppService {
  constructor(endpoint) {
    super(endpoint = '/planets/')
  }

  _extractId(payload) {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = payload.url.match(idRegExp)[1];
    return id
  }

  async _read(id) {
    const planet = await this.read(id);

    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter,
    }

  }

  // read(id)
  // list() {
  //   return super.list()
  // }
}