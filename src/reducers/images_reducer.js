import _ from 'lodash';

import {
  ALL_IMAGES,
  DELETE_IMAGE,
  DELETE_IMAGE_CHUNKS,
  FRONTPAGE_IMAGES,
  GET_FRONTPAGE_IMAGES,
  DELETE_FRONTPAGE_IMAGE
} from '../actions/types';

export default function(state = {}, action) {
      switch(action.type){
            case ALL_IMAGES:
                  return {...state, data: action.payload};
            case DELETE_IMAGE:
                  return _.omit(state, action.payload);
            case DELETE_IMAGE_CHUNKS:
                  return _.omit(state, action.payload);
            case FRONTPAGE_IMAGES:
                  return {...state, data: action.payload};
            case GET_FRONTPAGE_IMAGES:
                  return {...state, frontpageData: action.payload};
            case DELETE_FRONTPAGE_IMAGE:
                  return _.omit(state, action.payload);
            default:
                  return state;
      }
}