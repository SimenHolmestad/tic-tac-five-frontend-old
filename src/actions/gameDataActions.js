import { UPDATE_GAME_DATA } from './types.js';

export function updateGameData (newGameData) {
  return {
    type: UPDATE_GAME_DATA,
    payload: {
      newGameData: newGameData
    }
  };
}

export function fetchGameData(gameId) {
  return async function(dispatch) {
    const url = 'http://localhost:8080/api/games/' + gameId;
    try {
      console.log(url);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      dispatch(updateGameData(data)); // dispatch updateGameData after receiving data
    } catch (error) {
      console.log('Could not fetch game data from server', error);
    }
  };
};
