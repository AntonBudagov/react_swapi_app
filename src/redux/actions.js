const RANDOM_PLANET = "RANDOM_PLANET";
const GET_PLANET_LIST = 'GET_PLANET_LIST';

const toggleRandomPlanet = (randomPlanet) => ({
  type: RANDOM_PLANET,
  randomPlanet,
});

const getPlanetList = () => ({
  type: GET_PLANET_LIST
});

const actions = {
  RANDOM_PLANET,
  toggleRandomPlanet,
  GET_PLANET_LIST,
  getPlanetList,
};

export default actions;