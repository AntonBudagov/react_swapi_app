import AppService from './app';

export default class StarShip extends AppService {
  constructor(endpoint) {
    super(endpoint = '/starships/')
  }

  _extractId = (payload) => {
    const idRegExp = /\/([0-9]*)\/$/;
    const id = payload.url.match(idRegExp)[1];
    return id
  };

  getImage = ({id}) => {
    return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
  };

  async _read(id) {
    const starship = await this.read(id);

    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
      starshipClass: starship.starship_class
      //...
    }

  }
}
