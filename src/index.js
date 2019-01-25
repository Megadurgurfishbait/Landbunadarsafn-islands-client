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
import changeArticle from './components/changeArticle';
import knowledge from './components/knowledge';
import English from './components/undirsidur/english';
import Opnunartimi from './components/undirsidur/opnunartimar';
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
        <Route path="skrainn" component={signin}/>
        <Route path="skraut" component={Signout}/>
      {/*<Route path="skramig" component={Signup}/> */}
        <Route path="skrafrett" component={RequireAuth(Feature)}/>
        <Route path="frettir/:id" component={Post} />
        <Route path="changeArticle/:id" component={changeArticle}/>
        <Route path="frodleikur" component={knowledge}/>
        <Route path="english" component={English} />
        <Route path="opnunartimar" component={Opnunartimi} />
        <Route path="eldrifrettir" component={OldNews} />
        <Route component={images} />
      </Route>
    </Router>
  </Provider>
    , document.querySelector('.container'));
