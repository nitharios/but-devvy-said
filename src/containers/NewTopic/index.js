/* NOT CURRENTLY NECESSARY */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewTopic extends Component {
  constructor() {
    super();

    this.state = {
      name : ''
    };
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
    e.preventDefault(e);

    this.props.addNewTopic(this.state.name);

    this.setState({
      name : ''
    });
  }

  render() {
    return(
      <div></div>
    )
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    addNewTopic: topicName => {
      dispatch(addNewTopic(topicName));
    } 
  };
};

export default connect(
  null,
  mapDispatchToProps
);