import { ActionTypes } from '../actionTypes';
import constants from '../constants';

const initialState = {
  status: constants.AppStatus.WAITING_FOR_CSV,
  csv: {},
  games: [],
};

function csv(state, action) {
  switch(action.type) {
    case ActionTypes.ADD_CSV_FILE:
      state = action.data;
      return state;
    default:
      return state;
  }
}

function games(state, action) {
  switch(action.type) {
    case ActionTypes.ADD_CSV_FILE:
      const keys = action.data.splice(0, 1)[0];
      const games = action.data.splice(1, action.data.length - 1);
      const mappedGames = games.map(g => {
        let mappedGame = {};
        keys.forEach((key, i) => mappedGame[key] = g[i]);
        return mappedGame
      });
      state = mappedGames;
      return state;
    default:
      return state;
  }
}

function status(state, action) {
  switch(action.type) {
    case ActionTypes.ADD_CSV_FILE:
      state = constants.AppStatus.CSV_LOADED;
      return state;
    default:
      return state;
  }
}

function collectionAnalyzerApp(state = initialState, action) {
  return {
    status: status(state.status, action),
    csv: csv(state.csv, action),
    games: games(state.games, action),
  };
}

export default collectionAnalyzerApp