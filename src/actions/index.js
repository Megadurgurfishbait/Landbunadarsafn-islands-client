import axios from 'axios';
import {browserHistory } from 'react-router';
import { AUTH_USER, 
      AUTH_ERROR, 
      UNAUTH_USER, 
      SEND_POST, 
      FETCH_POST, 
      SINGLE_POST, 
      DELETE_POST,  
      ALL_IMAGES
      } from './types';

import config from '../config';
const ROOT_URL = config.slod;

export function signInUser({email, password}){
      return function(dispatch) {
            dispatch({ type: arguments})

            axios.post(`${ROOT_URL}/signin`, {email, password})
                  .then(response => {

                        // If request is good...
                        // - Update state to indicate user is authenticated
                        dispatch({ type: AUTH_USER })
                        // - Save JWT Token
                        localStorage.setItem('token', response.data.token);
                        // - redirect to the route '/feature'
                        browserHistory.push('/skrafrett');
                  })
                  .catch(() => {
                        // if request is bad..
                        // - Show an error to the user.
                        dispatch(authError('Bad Login Info'));
                  })
      // Submit email/password to the server
      }
}

export function signupUser({email, password}){
      return function(dispatch){
            axios.post(`${ROOT_URL}/signup`, {email, password})
                  .then(response => {
                        dispatch({type: AUTH_USER});
                        localStorage.setItem('token', response.data.token);
                        browserHistory.push('/skrafrett');
                  })
                  .catch(response => {
                        dispatch(authError(response.response.data.error));
                  })
      }
}

export function authError(error){
      return {
            type: AUTH_ERROR,
            payload: error
      }
}

export function signoutUser() {
      localStorage.removeItem('token');
      return { type: UNAUTH_USER };

} 

export function sendPost({title, text, headingPath, filePath, createdAt}, callback){
      return function(dispatch){

            axios.post(`${ROOT_URL}/post`, {title, text, headingPath, filePath, createdAt})
                  .then(response => {
                        dispatch({type: SEND_POST});
                  }, callback())
                  .catch(response => {
                        dispatch(authError(response.response.data.error));
                  })
      }
}

export function fetchPost() {
      return function(dispatch){
            axios.get(`${ROOT_URL}/posts`,{
            })
            .then(response => {
                  
                  dispatch({
                        type: FETCH_POST,
                        payload: response.data
                  });
            });
      }
}

export function fetchFrontPost() {
      return function(dispatch){
            axios.get(`${ROOT_URL}/frontPosts`,{
            })
            .then(response => {
                  dispatch({
                        type: FETCH_POST,
                        payload: response.data
                  });
            });
      }
}

export function singlePost(id) {
      return function(dispatch){
            axios.get(`${ROOT_URL}/post/${id}`, {
            })
            .then(response => {
                  dispatch({
                        type: SINGLE_POST,
                        payload: response.data
                  });
            });
      }
}

export function deletePost(id, callback) {
      const request = axios.delete(`${ROOT_URL}/removePost/${id}`)
        .then(() => callback());
    
      return {
        type: DELETE_POST,
        payload: id
      }
    }



export function fetchImages() {
      return function(dispatch){
            axios.get(`${ROOT_URL}/files`,{
            })
            .then(response => {
                  dispatch({
                        type: ALL_IMAGES,
                        payload: response.data
                  });
            }) .catch(response => {
                  dispatch(authError(response.data.error));
            })
      }
}