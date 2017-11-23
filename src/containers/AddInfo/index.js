import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTopics } from '../../actions/query.actions';
import { addNewExample } from '../../actions/example.actions';
import { addNewNote } from '../../actions/note.actions';
import { addNewResource } from '../../actions/resource.actions';

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
  }

  handleReset(e) {
    this.setState({
      model : '',
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

    let info = {};
    let { title, format, 
          code, comment, 
          student, cohort, 
          bullets, url 
        } = this.state;

    switch(this.state.model) {
      case EXAMPLE:
        info = {
          title : title,
          format : format,
          code : code,
          comment : comment
        };

        this.props.addNewExample(info);
        break;

      case NOTE:
        info = {
          title : title,
          student : student,
          cohort : cohort,
          bullets : bullets
        };

        this.props.addNewNote(info);
        break;

      case RESOURCE:
        info = {
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
    return(
      <div></div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
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