import actions from './actions';

const initState = {
  showRandomPlanet: false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actions.RANDOM_PLANET:
      return {
        ...state, showRandomPlanet: !state.showRandomPlanet
      };
    default:
      return state;
  }
};

export default reducer;