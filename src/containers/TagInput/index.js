import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WithContext as ReactTags } from 'react-tag-input';

/*ACTIONS*/
import { loadTopics } from '../../actions/topic.actions';

class TagInput extends Component {

  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentDidMount() {
    this.props.loadTopics();
  }

  handleDelete(i) {
    let topics = this.props.topicsList;
    topics.splice(i, 1);
  }

  handleAddition(tag) {
    let topics = this.props.topicsList;
    topics.push({
      id : topics.length + 1,
      name : tag
    });
  }

  handleDrag(tag, currPos, nextPos) {
    let topics = this.props.topicsList;

    //mutate array
    topics.splice(currPos, 1);
    topics.splice(nextPos, 0, tag);

    //re-render

  }

  render() {
    console.log('TagInput render');
    let topics = this.props.topicsList; //[] of 244 topics

    return (
      <div>
        <label>Add A Topic..</label>
        <ReactTags 
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag} 
        />
      </div>
    );
  }



}
//end class

const mapStateToProps = state => {
  return {
    topicsList : state.topicsList
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadTopics : ()  => {
      dispatch(loadTopics());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagInput);