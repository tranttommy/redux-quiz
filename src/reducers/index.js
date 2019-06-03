import { combineReducers } from 'redux';
import thumbnails from './thumbnailReducer';
import details from './detailReducer';
import comments from './commentReducer';

export default combineReducers({
  thumbnails,
  details,
  comments
});
