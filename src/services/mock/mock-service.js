const _planets = [
  {
    id: 1,
    name: 'Earth [TEST DATA]',
    population: '7.530.000.000',
    rotationPeriod: '23 hours 56 seconds',
    diameter: '12.742 km'
  },
  {
    id: 2,
    name: 'Venus [TEST DATA]',
    population: 'not known',
    rotationPeriod: '243 days',
    diameter: '12.104 km'
  }
];

const _people = [
  {
    id: 1,
    name: 'Bilbo Baggins [TEST DATA]',
    gender: 'male',
    birthYear: 'long ago',
    eyeColor: 'dark brown'
  },

  {
    id: 2,
    name: 'Frodo Baggins [TEST DATA]',
    gender: 'male',
    birthYear: 'long ago',
    eyeColor: 'dark brown'
  }
];
const _starships = [
  {
    id: 1,
    name: 'USS Enterprise [TEST DATA]',
    model: 'NCC-1701-C',
    manufacturer: 'Northrop Grumman Shipbuilding',
    costInCredits: 'not known',
    length: 'approx 300 meters',
    crew: 1000,
    passengers: 50,
    cargoCapacity: 100
  }
];
const imgPlanet = 'https://placeimg.com/400/400/nature';
const imgPeople = 'https://placeimg.com/400/400/people';
const imgStarship = 'https://placeimg.com/400/400/tech';

class MockApi {
  constructor(mocks, imageUrl) {
    this.mock = mocks;
    this.imageUrl = imageUrl
  }

  _list = async () => {
    return this.mock;
  };
  _read = async () => {
    return this.mock[0];
  };

  getImage = () => {
    return this.imageUrl
  };
}

class MockPlanet extends MockApi {
  constructor(mock, img) {
    super(mock = _planets, img = imgPlanet)
  }
}

class MockPeople extends MockApi {
  constructor(mock, img) {
    super(mock = _people, img = imgPeople)
  }
}

class MockStarship extends MockApi {
  constructor(mock, img) {
    super(mock = _starships, img = imgStarship)
  }
}



//
// const mockPople = new MockApi(_people, 'https://placeimg.com/400/500/people');
// const mockPlanet = new MockApi(_planets, 'https://placeimg.com/400/400/nature');
// const mockStarship = new MockApi(_starships, 'https://placeimg.com/600/400/tech');
//
// export {
//   mockPople,
//   mockPlanet,
//   mockStarship
// }


export {
  MockPlanet,
  MockPeople,
  MockStarship
}