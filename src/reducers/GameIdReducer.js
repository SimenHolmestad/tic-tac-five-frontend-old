import { UPDATE_GAME_ID } from './../actions/types.js';

const gameDataReducer = (state = '', action) => {
  switch (action.type) {
    case UPDATE_GAME_ID:
      return action.payload.newGameId;
    default:
      return state;
  }
};

export default gameDataReducer;
