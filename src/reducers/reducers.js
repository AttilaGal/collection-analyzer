import { ActionTypes } from '../actionTypes';

const initialState = {
  state: 'WAITING_FOR_CSV',
  csv: null,
  games: [],
};

function csv(state, action) {
  switch(action.type) {
    case ActionTypes.ADD_CSV_FILE:
      state = Object.assign({}, state, { csv: action.data });
      return state;
    default:
      return state;
  }
}

function games(state, action) {
  switch(action.type) {
    case ActionTypes.ADD_CSV_FILE:
      state = Object.assign({}, state, { csv: action.data });
      return state;
    default:
      return state;
  }
}

function collectionAnalyzerApp(state = initialState, action) {
  return {
    state: state.state,
    csv: csv(state.csv, action),
    games: games(state.games, action),
  };
}

export default collectionAnalyzerApp