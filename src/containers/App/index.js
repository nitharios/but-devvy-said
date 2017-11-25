import React, { Component } from 'react';
import { connect } from 'react-redux';
import { query } from '../../actions/query.actions';
import ListBuilder from '../../components/listbuilder.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      devvyText : '',
      userText : '',
      userQuery : ''    
    };

    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClear(e) {
    this.setState({ userQuery : '' });
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
    
    let query = { userQuery : this.state.userQuery };

    this.props.query(query);
    this.setState({ userQuery : '' });
  }
 
  render() {
    console.log(this.props.singleTopic.error);
    
    return(
      <div id="app">
        <div id="banner">
          Hello, my name is Devvy Cho!
        </div>

        <div id="input-box">
          <input
            id="text-input"
            onChange={ this.handleChange }
            name="userQuery"
            placeholder="How can I help you?"
            type="text" 
            value={ this.state.userQuery } />
          <input
            className="button"
            id="go-button"
            onClick={ this.handleSubmit } 
            type="button"
            value="GO" />
          <input
            className="button"
            id="clear-button"
            onClick={ this.handleClear }
            type="button"
            value="CLEAR" />
        </div>

        { this.props.singleTopic.name
          ? <div className="response-box">This is the information I have...</div>
          : <div className="response-box">Sorry! I don't have any info on that</div>
        }

        <div id="information-box">
          <ListBuilder
            id="examples"
            informationList={ this.props.examplesList }
            label="Examples"
            type="code" />
          <ListBuilder
            id="notes"
            informationList={ this.props.notesList }
            label="Notes"
            type="bullets" />
          <ListBuilder
            id="resources"
            informationList={ this.props.resourcesList }
            label="Resources"
            type="url" />
        </div>

      </div>
    );
  }
}

// maps store state to local props
const mapStateToProps = state => {  

  return {
    examplesList : state.examplesList,
    notesList : state.notesList,
    resourcesList : state.resourcesList,
    singleTopic : state.singleTopic
  }
}

const mapDispatchToProps = dispatch => {
  return {
    query : input => {
      dispatch(query(input));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)