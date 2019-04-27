const RANDOM_PLANET = "RANDOM_PLANET";

const toggleRandomPlanet = (randomPlanet) => ({
  type: RANDOM_PLANET,
  randomPlanet,
});

const actions = {
  RANDOM_PLANET,
  toggleRandomPlanet,
};

export default actions;