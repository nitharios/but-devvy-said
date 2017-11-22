import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addUserText } from '../../actions/user.actions';
import { query } from '../../actions/query.actions';

class App extends Component {
  constructor() {
    super();

    this.devvyText = '';
    this.userText = '';
    this.userInput = '';

    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClear(e) {
    this.setState({
      userInput : ''
    });
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

    // this.props.addUserText(this.state.userInput);
    this.props.query(this.state.userInput);

    this.setState({
      userInput : ''
    });
  }

 
  render() {
    return (
      <div id="app">

        <div id="information-box">
          <div className="information" id="examples">
            { this.props.examplesList }
          </div>
          <div className="information" id="notes">
            { this.props.notesList }
          </div>
          <div className="information" id="resources">
            { this.props.resourcesList }
          </div>
        </div>

        <div id="chatbox">

        </div>

        <div id="inputbox">
          <input
            onChange={ this.handleChange }
            name="userInput"
            placeholder="How can I help you?"
            type="text" 
            value= { this.state.userInput } />
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

// maps store state to local props
const mapStateToProps = (state) => {
  return {
    examplesList : state.examplesList,
    notesList : state.notesList,
    resourcesList : state.resourcesList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // addUserText : () => {
    //   dispatch(addUserText(input));
    // },

    query : (input) => {
      dispatch(query(input));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)