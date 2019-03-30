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

  _list = async () => {
    const planetList = await this.list();
    return planetList.map((item) => {
      return {
        id: this._extractId(item),
        name: item.name,
        diameter: item.diameter
      }
    })
  }

  // read(id)
  // list() {
  //   return super.list()
  // }
}