import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import ImgReducer from './images_reducer';
import { reducer as form } from 'redux-form';


const rootReducer = combineReducers({
      form,
      auth: authReducer,
      img: ImgReducer
});
export default rootReducer;
