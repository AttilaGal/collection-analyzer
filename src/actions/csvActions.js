import ActionTypes from '../actionTypes';

export default function addCsvFile(file) {
  return {
    type: ActionTypes.ADD_CSV_FILE,
    data: file,
  };
}
