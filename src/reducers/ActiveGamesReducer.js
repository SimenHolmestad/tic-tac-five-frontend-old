import { UPDATE_ACTIVE_GAMES } from './../actions/types.js';

const activeGamesReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_ACTIVE_GAMES:
      return action.payload.currentActiveGames;
    default:
      return state;
  }
};

export default activeGamesReducer;
