/*MAIN COMPONENT*/
/*MAIN COMPONENT*/
/*MAIN COMPONENT*/

import React, { Component } from 'react';
import { connect } from 'react-redux'; 

/*CONTAINERS*/
import Header from '../Header';
import QueryBox from '../QueryBox';
import InputBar from '../InputBar';

/*COMPONENTS*/
import TopicList from '../TopicList';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
      
        <Header />

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