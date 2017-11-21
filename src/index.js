import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './containers/App';
import reducers from './reducers';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './lib/registerServiceWorker';


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