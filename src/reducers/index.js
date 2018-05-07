import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import ImgReducer from './images_reducer';
import { reducer as form } from 'redux-form';
import eventReducer from './event_reducer';

const rootReducer = combineReducers({
      form,
      auth: authReducer,
      img: ImgReducer,
      event: eventReducer
});
export default rootReducer;
