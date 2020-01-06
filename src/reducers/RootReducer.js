import { combineReducers } from 'redux';
import gameDataReducer from './GameDataReducer';
import gameIdReducer from './GameIdReducer';

// Combines all reducers and export them
export default combineReducers({
  gameData: gameDataReducer,
  gameId: gameIdReducer
});
