import React, { Component } from 'react';
import { connect } from 'react-redux';
import { query } from '../../actions/query.actions';
import ListBuilder from '../../components/listbuilder.component';

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

    this.props.query(this.state.userInput);

    this.setState({
      userInput : ''
    });
  }

 
  render() {
    return(
      <div id="app">

        <div id="information-box">
          <ListBuilder
            id="examples"
            informationList={ this.props.examplesList }
            type="code" />
          <ListBuilder
            id="notes"
            informationList={ this.props.notesList }
            type="bullets" />
          <ListBuilder
            id="resources"
            informationList={ this.props.resourcesList }
            type="url" />
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
    query : (input) => {
      dispatch(query(input));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)