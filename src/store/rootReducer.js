import {combineReducers} from 'redux';

import news from './reducers/news';

const rootReducer = combineReducers({
  news,
});

export default rootReducer;
