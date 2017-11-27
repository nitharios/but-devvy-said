import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WithContext as ReactTags } from 'react-tag-input';

/*ACTIONS*/
import { loadTopics } from '../../actions/topic.actions';
import { addNewResource } from '../../actions/resource.actions';

/*STYLES*/
import './TagInput.css';

class TagInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tags : [] //{id : 1, name : 'async'}, {}, {}
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  componentDidMount() {
    this.props.loadTopics();
  }

  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
  }

  handleAddition(newTag) {
    let tags = this.state.tags;
    tags.push({
      id : tags.length + 1,
      name : newTag
    });
    this.setState({tags : tags});
  }

  handleDrag(tag, currPos, nextPos) {
    let tags = this.state.tags;

    //mutate array
    tags.splice(currPos, 1);
    tags.splice(nextPos, 0, tag);

    //re-render
    this.setState({tags : tags});
  }

  render() {
    console.log('TagInput render');

    let tags = this.state.tags;
    let suggestions = this.props.topicsList.map(i => {
      return i.name;
    }); //array of strings, only the 'name' property of our topicsList

    console.log(tags);

    return (
      <div>
        <label className="TagInput-label">Please Provide Topics..</label>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          placeholder="Enter Topics.."
          labelField="name"
          handleDelete={this.handleDelete}
          handleAddition={this.handleAddition}
          handleDrag={this.handleDrag}

          classNames={{
            tags : 'tagsClass',
            tag : 'tagClass',
            tagInput : 'tagInputClass',
            tagInputField : 'tagInputFieldClass',
            selected : 'selectedClass',
            remove : 'removeClass',
            suggestions : 'suggestionsClass',
            activeSuggestion : 'activeSuggestionClass'
          }}

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
    },
    addNewResource : (newResource) => {
      dispatch(addNewResource(newResource));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagInput);