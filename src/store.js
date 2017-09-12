import { createStore } from 'redux';
import collectionAnalyzerApp from './reducers/reducers';

let store = createStore(collectionAnalyzerApp);

export default store;