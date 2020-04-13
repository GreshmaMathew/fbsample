import {combineReducers} from 'redux';
import BlogReducer from './BlogReducers';
const rootReducer = combineReducers({
  blogsList: BlogReducer,
});
export default rootReducer;
