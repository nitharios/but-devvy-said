import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { reducer as reduxFormReducer } from 'redux-form'; // !! may change

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

/* Containers */
import App from './containers/App';
import AddInfo from './containers/AddInfo';
import StageForm from './containers/StageForm';
/* Components */
import About from './components/about.component';
import NavBar from './components/navbar.component';

/* library files */
import registerServiceWorker from './lib/registerServiceWorker';

/* SASS */
import './styles/index.scss';

// ------STORE--------
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);
// ------STORE--------

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <div id="source">

        <header id="global-nav-header">
          <NavBar />
        </header>

        <Route exact path="/" component={ App } />
        <Route path="/about" component={ About } />
        <Route path="/addinfo" component={ AddInfo } />
        <Route path="/stageform" component={ StageForm } />


      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();