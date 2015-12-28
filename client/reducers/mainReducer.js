import { combineReducers } from 'redux';

import postListReducer from './postListReducer';
import postReducer from './postReducer';
import headerReducer from './headerReducer';
import errorReducer from './errorReducer';


export default combineReducers({
    blogPage: postListReducer,
    postPage: postReducer,
    headerData:headerReducer,
    error:errorReducer
});