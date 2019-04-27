import actions from './actions';

const initState = {
  showRandomPlanet: false
};

const reducer = (state = true, action) => {
  switch (action.type) {
    case actions.RANDOM_PLANET:
      return {
        ...state, showRandomPlanet: [state.showRandomPlanet, action.showRandomPlanet]
      }
  }
};

export default reducer;