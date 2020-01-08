import { UPDATE_ACTIVE_GAMES } from './types.js';

export function updateActiveGames (currentActiveGames) {
  return {
    type: UPDATE_ACTIVE_GAMES,
    payload: {
      currentActiveGames: currentActiveGames
    }
  };
}

export function fetchActiveGames() {
  return async function(dispatch) {
    const url = process.env.REACT_APP_API_URL + '/api/active_games/';
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch(updateActiveGames(data));
    } catch (error) {
      console.log('Could not fetch game data from server', error);
    }
  };
};
