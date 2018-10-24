import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';


import App from './components/app';
import Signout from './components/Auth/signout';
import Signup from './components/Auth/signup';
import reducers from './reducers';
import signin from './components/Auth/signin';
import Feature from './components/Articles/feature';
import RequireAuth from './components/Auth/require_auth';
import { AUTH_USER } from './actions/types';
import images from './components/images';
import Post from './components/post';
import MyPictures from './components/myPictures';
import addEvent from './components/addEvent';
import changeArticle from './components/changeArticle';
import knowledge from './components/knowledge';
import English from './components/undirsidur/english';
import Opnunartimi from './components/undirsidur/opnunartimar';
import Vefrit from './components/undirsidur/vefrit';
import OldNews from './components/oldNews';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
      // We need to update our application state.
      store.dispatch({ type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)}  history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={images} />
        <Route path="addevent" component={addEvent} />
        <Route path="signin" component={signin}/>
        <Route path="signout" component={Signout}/>
        <Route path="signup" component={Signup}/>
        <Route path="feature" component={RequireAuth(Feature)}/>
        <Route path="post/:id" component={Post} />
        <Route path="myndasafn" component={RequireAuth(MyPictures)}/>
        <Route path="changeArticle/:id" component={changeArticle}/>
        <Route path="frodleikur" component={knowledge}/>
        <Route path="english" component={English} />
        <Route path="opnunartimar" component={Opnunartimi} />
        <Route path="vefrit" component={Vefrit} />
        <Route path="eldrifrettir" component={OldNews} />
      </Route>
    </Router>
  </Provider>
    , document.querySelector('.container'));
