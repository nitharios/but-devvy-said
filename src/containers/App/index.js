import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor() {
    super();

    this.devvyText = '';
    this.userText = '';
    this.userInput = '';
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name] : value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    

    this.setState({
      userInput : ''
    });
  }

 
  render() {
    return (
      <div id="app">

        <div id="chatbox">

        </div>

        <div id="inputbox">
          <input
            onChange={ this.handleChange }
            name="userInput"
            placeholder="How can I help you?"
            type="text" />
          <input
            onClick={ this.handleSubmit } 
            type="button"
            value="GO" />
          <input
            onClick={ this.handleClear }
            type="button"
            value="CLEAR" />
        </div>

      </div>
    );
  }
}