import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';
/* Containers */
import App from './containers/App';
import NewTopic from './containers/NewTopic';

/* Components */
import About from './components/About';

/* library files */
import registerServiceWorker from './lib/registerServiceWorker';

// ------STORE--------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
// ------STORE--------

ReactDOM.renders(
  <Provider store={ store }>
    <Router>
      <div id="source">

        <header id="global-nav-header">
          <div id="devvy-cho-logo">
            <Link to="/">
              <div></div>
            </Link>
          </div>
        </header>

        <Route exact path="/" component={ App } />
        <Route path="/about" component={ About } />
        <Route path="/newtopic" component={ NewTopic } />

      </div>
    </Router>
  </Provider>
);

registerServiceWorker();