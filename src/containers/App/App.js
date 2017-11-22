/*MAIN COMPONENT*/
/*MAIN COMPONENT*/
/*MAIN COMPONENT*/

import React, { Component } from 'react';
import { connect } from 'react-redux'; 

/*CONTAINERS*/
import QueryBox from '../QueryBox/QueryBox';
import InputBar from '../InputBar/InputBar';

/*COMPONENTS*/
import Nav from '../../components/Nav';
import TopicList from '../TopicList/TopicList';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">

        <Nav />

        <div className="App-header">
          <h1 className="App-title">Welcome to Devvy Cho Artificial Intelligence</h1>
        </div>
        
        <InputBar />
        <div className="App-chat-window">
          <h4>Display Box</h4>
          <TopicList />
          <QueryBox />
        </div>
        
      </div>
    );
  }


}
//end class

export default App;