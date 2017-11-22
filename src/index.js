/*REACT ENTRY POINT*/
/*REACT ENTRY POINT*/
/*REACT ENTRY POINT*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';

import reducers from './reducers';
import thunk from 'redux-thunk';
import registerServiceWorker from './lib/registerServiceWorker';

/*COMPONENTS*/
import App from './containers/App/App';

// --STORE----------///////
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
// --STORE----------///////

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));


registerServiceWorker();