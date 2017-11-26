import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTopics } from '../../actions/topic.actions';
import { WithContext as ReactTags } from 'react-tag-input';

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

  }

  handleAddition(tag) {

  }

  handleDrag() {

  }

  render() {
    console.log('TagInput render');
    const { tags, suggestions } = this.props.topicsList;
    return (
        <ReactTags tags={tags}
          suggestions={suggestions}
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag} 
        />
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