import {
      AUTH_USER,
      UNAUTH_USER,
      AUTH_ERROR,
      FETCH_MESSAGE,
      SEND_POST,
      FETCH_POST,
      SINGLE_POST,
      DELETE_POST
} from '../actions/types';
import _ from 'lodash';

export default function(state = {}, action) {

      switch(action.type){
            case AUTH_USER:
                  return {...state, error: '', authenticated: true };
            case UNAUTH_USER:
                  return {...state, authenticated: false};
            case AUTH_ERROR:
                  return {...state, error: action.payload};
            case FETCH_MESSAGE:
                  return {...state, message: action.payload};
            case SEND_POST:
                  return {...state, message: action.payload};
            case FETCH_POST:
                  return {...state, posts: action.payload};
            case SINGLE_POST:
                  return {...state, post: action.payload[0]};
            case DELETE_POST:
                  return _.omit(state, action.payload);
      }
      return state;
}