import { createStore } from 'redux';
import collectionAnalyzerApp from './reducers/reducers';

const store = createStore(collectionAnalyzerApp);

export default store;
