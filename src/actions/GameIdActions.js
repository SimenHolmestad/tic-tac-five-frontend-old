import { UPDATE_GAME_ID } from './types.js';

export function updateGameId (newGameId) {
  return {
    type: UPDATE_GAME_ID,
    payload: {
      newGameId: newGameId
    }
  };
}
