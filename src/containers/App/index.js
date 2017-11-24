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
            name="userQuery"
            placeholder="How can I help you?"
            type="text" 
            value={ this.state.userQuery } />
          <input
            onClick={ this.handleSubmit } 
            type="button"
            value="GO" />
          <input
            onClick={ this.handleClear }
            type="button"
            value="CLEAR" />
        </div>

        { this.props.singleTopic.name
          ?  <div>This what I know about the { this.props.singleTopic.name } topic</div>
          : <div>Sorry! I don't have any info on that :(</div>
        }

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