import {
ADD_EVENT,
GET_EVENTS
    } from '../actions/types';

    export default function(state = {}, action) {
      switch(action.type){
            case ADD_EVENT:
                  return {...state, data: action.payload};
            case GET_EVENTS:
                  return {...state, events: action.payload}
      }
      return state;
}