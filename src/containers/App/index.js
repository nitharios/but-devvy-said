/*MAIN COMPONENT*/
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
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