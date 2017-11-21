import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectTopic } from '../actions/index';
import { bindActionCreators } from 'redux';

class TopicList extends Component {
  renderList() {
    return this.props.topics.map((topic) => {
      return (
        <li
         key={topic.title} 
         onClick={() => this.props.selectTopic(topic)}
         className="list-group-item">
         {topic.title}
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
  // state returns as props inside of booklist
  return {
    topics: state.topics
  };
}

// anything run here will end up as props on the booklist container
function mapDispatchToProps(dispatch) {

// when selectbook is called result should be passed to all reducers
  return bindActionCreators({ selectTopic: selectTopic }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);






