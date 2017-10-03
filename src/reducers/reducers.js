import immutable from 'immutable';
import ActionTypes from '../actionTypes';
import constants from '../constants';

const initialState = immutable.fromJS({
  status: constants.AppStatus.WAITING_FOR_CSV,
  csv: {},
  games: [],
});

function csv(state, action) {
  switch (action.type) {
    case ActionTypes.ADD_CSV_FILE:
      state.set(immutable.fromJS(action.data));
      return state;
    default:
      return state;
  }
}

function games(state, action) {
  switch (action.type) {
    case ActionTypes.ADD_CSV_FILE:
      const keys = action.data.splice(0, 1)[0];
      const gamez = action.data.splice(1, action.data.length - 1);
      const mappedGames = gamez.map((g) => {
        const mappedGame = {};
        keys.forEach((key, i) => { mappedGame[key] = g[i]; });
        return mappedGame;
      });
      const newState = immutable.fromJS(mappedGames);
      return newState;
    default:
      return state;
  }
}

function status(state, action) {
  switch (action.type) {
    case ActionTypes.ADD_CSV_FILE:
      const newState = constants.AppStatus.CSV_LOADED;
      return newState;
    default:
      return state;
  }
}

function collectionAnalyzerApp(state = initialState, action) {
  return immutable.fromJS({
    status: status(state.get('status'), action),
    csv: csv(state.get('csv'), action),
    games: games(state.get('games'), action),
  });
}

export default collectionAnalyzerApp;
