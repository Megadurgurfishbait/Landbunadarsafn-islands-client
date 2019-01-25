import _ from 'lodash';

import {
  ALL_IMAGES
} from '../actions/types';

export default function(state = {}, action) {
      switch(action.type){
            case ALL_IMAGES:
                  return {...state, data: action.payload};
            default:
                  return state;
      }
}