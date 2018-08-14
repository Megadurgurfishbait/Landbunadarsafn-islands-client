import axios from 'axios';
import {browserHistory } from 'react-router';
import { AUTH_USER, 
      AUTH_ERROR, 
      UNAUTH_USER, 
      FETCH_MESSAGE, 
      HANDLE_UPLOAD, 
      SEND_POST, 
      FETCH_POST, 
      SINGLE_POST, 
      DELETE_POST,  
      ALL_IMAGES, 
      DELETE_IMAGE, 
      DELETE_IMAGE_CHUNKS,
      FRONTPAGE_IMAGES,
      GET_FRONTPAGE_IMAGES,
      DELETE_FRONTPAGE_IMAGE,
      ADD_EVENT,
      GET_EVENTS
      } from './types';

const ROOT_URL = "https://fierce-plateau-26257.herokuapp.com";

export function signInUser({email, password}){

      return function(dispatch) {
            dispatch({ type: arguments})
            console.log(email)
            axios.post(`${ROOT_URL}/signin`, {email, password})
                  .then(response => {
                        // If request is good...
                        // - Update state to indicate user is authenticated
                        dispatch({ type: AUTH_USER })
                        // - Save JWT Token
                        localStorage.setItem('token', response.data.token);
                        // - redirect to the route '/feature'
                        browserHistory.push('/feature');
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
      console.log(password);
      return function(dispatch){
            axios.post(`${ROOT_URL}/signup`, {email, password})
                  .then(response => {
                        console.log("then");
                        dispatch({type: AUTH_USER});
                        localStorage.setItem('token', response.data.token);
                        browserHistory.push('/feature');
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
/*
export function showModal(){
      return function(dispatch){    
            dispatch({type: SHOW_IMAGES});
      }

}

export function closeModal() {
      return {
            type: NO_SHOW_IMAGES,
            payload: false
      }
}
*/

export function signoutUser() {

      localStorage.removeItem('token');
      return { type: UNAUTH_USER };

} 

export function fetchMessage() {
      return function(dispatch){
            axios.get(ROOT_URL,{
                  headers: {authorization: localStorage.getItem('token')}
            })
            .then(response => {
                  dispatch({
                        type: FETCH_MESSAGE,
                        payload: response.data.message
                  });
            });
      }
}

export function sendPost({title, text, headingPath, filePath}, callback){

      return function(dispatch){
            axios.post(`${ROOT_URL}/post`, {title, text, headingPath, filePath})
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

export function singlePost(id) {
      console.log("Action-Index-SinglePost", id);
      return function(dispatch){
            axios.get(`${ROOT_URL}/post/${id}`, {
            })
            .then(response => {
                  console.log("singlepost", response.data);
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
                  console.log("hér", response.err)
                  dispatch(authError(response.data.error));
            })
      }
}

export function deleteImage(id, callback){
      const request = axios.delete(`${ROOT_URL}/removeImage/${id}`)
      .then(() => callback());
  
    return {
      type: DELETE_IMAGE,
      payload: id
    }
}

export function deleteImageChunks(id, callback){
      const request = axios.delete(`${ROOT_URL}/removeImageChunks/${id}`)
      .then(() => callback());
  
    return {
      type: DELETE_IMAGE_CHUNKS,
      payload: id
    }
}

export function setFrontpageImages(imgLocation, callback){
      return function(dispatch) {
            axios.post(`${ROOT_URL}/frontpagephoto`, imgLocation)
                  .then(response => {
                        dispatch({type: FRONTPAGE_IMAGES});
                  }, callback())
                  .catch(response => {
                        console.log("Error í setFrontpageImages: ", response.data.error );
                  })
      }
}

export function getFrontpageImages() {
      return function(dispatch){
            axios.get(`${ROOT_URL}/frontpagephotos`,{
            })
            .then(response => {
                  dispatch({
                        type: GET_FRONTPAGE_IMAGES,
                        payload: response.data
                  });
            }) .catch(response => {
                  console.log("hér", response.err)
                  dispatch(authError(response.data.error));
            })
      }
}


export function removeFrontpageImage(id, callback) {
      const request = axios.delete(`${ROOT_URL}/deleteFrontpagephoto/${id}`)
      .then(() => callback());

      return {
            type: DELETE_FRONTPAGE_IMAGE,
            payload: id
      }
}

export function addEvent({title, description, date}, callback ){
      console.log("title: ", title);
      console.log("HERE ER ERAFSGS");
      return function (dispatch) {
            axios.post(`${ROOT_URL}/events`, {title, description, date})
            .then(response => {
                  dispatch({type: ADD_EVENT});
            }, callback())
            .catch( response => {
                  console.log(response);
            })
      }
}

export function fetchEvents() {
      return function(dispatch){
            axios.get(`${ROOT_URL}/events`)
            .then(response => {
                  dispatch({
                        type: GET_EVENTS,
                        payload: response.data      
                  });
            }).catch(response => {
                  console.log("FetchEvent: ", response);
            });
      }
}





