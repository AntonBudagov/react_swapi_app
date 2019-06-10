import actions from './actions';

const initState = {
  showRandomPlanet: false,
  planets: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.RANDOM_PLANET:
      return {
        ...state, showRandomPlanet: !state.showRandomPlanet
      };
    case action.GET_PLANET_LIST:
      return {
        ...state,
        planets: action.payload
      };
    default:
      return state;
  }
};

export default reducer;