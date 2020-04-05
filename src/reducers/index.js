import {combineReducers} from 'redux';
import blogReducers from './blogReducers';
const rootReducer = combineReducers({
  blogsList: blogReducers,
});
export default rootReducer;
