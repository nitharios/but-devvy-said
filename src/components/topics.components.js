import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectTopics } from '../actions/index';
import { bindActionCreators } from 'redux';

class topicsList extends Component {
  renderList() {
    return this.props.topicss.map((topic) => {
      return (
        <li
         key={topics.title} 
         onClick={() => this.props.selecttopics(topics)}
         className="list-group-item">
         {topics.title}
        </li>
        );
     });
  }


  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}



function mapStateToProps(state) {
  // state returns as props inside of topicslist
  return {
    topicss: state.topicss
  };
}

// anything run here will end up as props on the topicslist container
function mapDispatchToProps(dispatch) {

// when selecttopics is called result should be passed to all reducers
  return bindActionCreators({ selecttTopics: selectTopics }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(topicsList);






