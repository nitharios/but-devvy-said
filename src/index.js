/*REACT ENTRY POINT*/
/*REACT ENTRY POINT*/
/*REACT ENTRY POINT*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import reducers from './reducers';
import thunk from 'redux-thunk';
import registerServiceWorker from './lib/registerServiceWorker';

/*COMPONENTS*/
import App from './containers/App/App';

import './index.css';

// --STORE----------///////
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
// --STORE----------///////

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App}/>
        <Route path='/about' component={App} />
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));


registerServiceWorker();