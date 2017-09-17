import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/style.css';
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

export default (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRoute component={PhotoGrid}></IndexRoute>
            <Route path='/view/:postId' component={Single}></Route>
          </Route>
        </Router>
      </Provider>
    );

