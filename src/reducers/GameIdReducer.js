import { UPDATE_GAME_ID } from './../actions/types.js';

const gameDataReducer = (state = '5e04f0bc60976c715b5b0e4b', action) => {
  switch (action.type) {
    case UPDATE_GAME_ID:
      return action.payload.newGameId;
    default:
      return state;
  }
};

export default gameDataReducer;
