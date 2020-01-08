import { combineReducers } from 'redux';
import gameDataReducer from './GameDataReducer';
import GameInfoReducer from './GameInfoReducer';

// Combines all reducers and export them
export default combineReducers({
  gameData: gameDataReducer,
  gameInfo: GameInfoReducer
});
