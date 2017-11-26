import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTopics } from '../../actions/topic.actions';
import { addNewExample } from '../../actions/example.actions';
import { addNewNote } from '../../actions/note.actions';
import { addNewResource } from '../../actions/resource.actions';

// import { WithContext as ReactTags } from 'react-tag-input';
import Select from '../../components/select.component';

const EXAMPLE = 'example';
const NOTE = 'note';
const RESOURCE = 'resource';

class AddInfo extends Component {
  constructor() {
    super();

    this.state = {
      model : '',
      title : '',
      // Example Model fields
      format : '',
      code : '',
      comment : '',
      // Note Model fields
      student : '',
      cohort : '',
      bullets : '',
      // Resource Model fields
      url : ''
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.loadTopics();
  }

  

  handleReset(e) {
    this.setState({
      model : '',
      topic_id : '',
      title : '',
      format : '',
      code : '',
      comment : '',
      student : '',
      cohort : '',
      bullets : '',
      url : ''
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
    console.log('click on submit hit_!')
    let info = {};
    let { topic_id, title, format, 
          code, comment, 
          student, cohort, 
          bullets, url 
        } = this.state;

    switch(this.state.model) {
      case EXAMPLE:
        info = {
          topic_id : topic_id,
          title : title,
          format : format,
          code : code,
          comment : comment
        };

        this.props.addNewExample(info);
        break;

      case NOTE:
        info = {
          topic_id : topic_id,
          title : title,
          student : student,
          cohort : cohort,
          bullets : bullets
        };

        this.props.addNewNote(info);
        break;

      case RESOURCE:
        info = {
          topic_id : topic_id,
          title : title,
          url : url
        };

        this.props.addNewResource(info);
        break;

      default:
        break;
    }

    this.setState({
      model : '',
      topic_id : '',
      title : '',
      format : '',
      code : '',
      comment : '',
      student : '',
      cohort : '',
      bullets : '',
      url : ''
    });
  }

  render() {
    let tags = [{topic : 'Javascript'}, {topic : 'Promises'}, {topic : 'Async'}];
    let suggestions = 'Suggestions';
    return(
      <div>
        <form 
          className="add-info-form"
          onSubmit={ this.handleSubmit } >

          <Select
            defaultValue={ this.state.topic_id }
            list={ this.props.topicsList }
            name="topic_id"
            onChange={ this.handleChange }
            type="name" />

          <input
            defaultValue={ this.state.title }
            name="title"
            onChange={ this.handleChange }
            placeholder="title"
            type="text" />
          <input
            defaultValue={ this.state.format }
            name="format"
            onChange={ this.handleChange }
            placeholder="format"
            type="text" />
          <input
            defaultValue={ this.state.code }
            name="code"
            onChange={ this.handleChange }
            placeholder="code"
            type="text" />
          <input
            defaultValue={ this.state.comment }
            name="comment"
            onChange={ this.handleChange }
            placeholder="comment"
            type="text" />
          <input
            defaultValue={ this.state.student }
            name="student"
            onChange={ this.handleChange }
            placeholder="student"
            type="text" />
          <input
            defaultValue={ this.state.cohort }
            name="cohort"
            onChange={ this.handleChange }
            placeholder="cohort"
            type="text" />
          <input
            defaultValue={ this.state.bullets }
            name="bullets"
            onChange={ this.handleChange }
            placeholder="bullets"
            type="text" />
          <input
            defaultValue={ this.state.url }
            name="url"
            onChange={ this.handleChange }
            placeholder="url"
            type="text" />
          <input
            type="submit"
            value="Submit" />

        </form>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    topicsList : state.topicsList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadTopics : ()  => {
      dispatch(loadTopics());
    },
    addNewExample : info => {
      dispatch(addNewExample(info));
    },
    addNewNote : info => {
      dispatch(addNewNote(info));
    },
    addNewResource : info => {
      dispatch(addNewResource(info));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInfo)