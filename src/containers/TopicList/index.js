import React, {Component} from 'react';
import { connect } from 'react-redux';

/*ACTIONS*/
import { selectTopic } from '../../actions/index';

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
      <ul className="list-group">
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

}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(TopicList);