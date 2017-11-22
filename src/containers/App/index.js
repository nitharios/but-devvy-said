/*MAIN COMPONENT*/
import React, { Component } from 'react';
<<<<<<< HEAD:src/containers/App/App.js
import { connect } from 'react-redux'; 

/*CONTAINERS*/
import Header from '../Header';
import QueryBox from '../QueryBox';
import InputBar from '../InputBar';

/*COMPONENTS*/
import TopicList from '../TopicList';

import './App.css';
=======
>>>>>>> development:src/containers/App/index.js

class App extends Component {

  render() {

    return (
      <div className="App">
<<<<<<< HEAD:src/containers/App/App.js
      
        <Header />
=======
        <div className="App-header">
          <div className="App-bar">
            <ul>
              <li><a>About</a></li>
              <li><a>New Topic</a></li>
              <li><a>Related</a></li>
            </ul>
          </div>
          <img src='DevvyCho.jpg' width='120' height='90' alt='' />
        </div>
>>>>>>> development:src/containers/App/index.js

        <div className="App-chat">
          <div className="App-chat-window">
            <span>Hello Friend!</span>
            <span>Hi Devvy!</span>
            <span>How can I help?</span>
            <span>What is Javascript?</span>
            <span>Hmm...</span>
          </div>
        </div>

        <div className="App-input">
          <div>
            <textarea placeholder="Ask Me Something!"></textarea>
            <button>Send</button>
          </div>
        </div>
        

      </div>
    );
  }


}
//end class

export default App;