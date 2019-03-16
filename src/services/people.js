import AppService from './app';

export default class People extends AppService {
  constructor(endpoint) {
    super(endpoint = '/people/')
  }

  _extractId = (payload) => {
    const idRegExp = /\/([0-9]*)\/$/;
    // const id = payload.url.match(idRegExp)[1];
    // return id
    return payload.url.match(idRegExp)[1];
  }

  async _read(id) {
    const person = await this.read(id);

    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color,
      population: person.population,
    }

  }

  async _list() {
    const personList = await this.list();
    return personList.map((item) => {
      return {
        id: this._extractId(item),
        name: item.name,
      }
    })
  }

  // read(id) {
  //   return super.read(id)
  // }
  // list() {
  //   return super.list()
  // }
}