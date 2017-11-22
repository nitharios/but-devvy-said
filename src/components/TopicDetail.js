import React, { Component} from 'react';
import { connect } from 'react-redux';

class TopicDetail extends Component {
  render() {

    if(!this.props.topic){

      return <div>Choose a Topic to Get started</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.topic.title}</div>
        <div>Pages: {this.props.topic.length}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    topic: state.activeTopic
  };
}

export default connect(
  mapStateToProps,
  null
)(TopicDetail);