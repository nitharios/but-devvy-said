import React, { Component } from 'react';
import Nav from './components/nav.components';
import Querybox from './containers/Querybox';
import InputBar from './containers/InputBar';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
        <header className="App-header">
          <h1 className="App-title">Welcome to Devvy Cho Artificial Intelligence </h1>
        </header>
        <div className="display-box-container">
        <InputBar />
          <div className="display-box">
            <h4>this will be the display box</h4>
            <Querybox />
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
