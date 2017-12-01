import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loadTopics } from '../../actions/topic.actions';
import { addNewResource } from '../../actions/resource.actions';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

class StageForm extends Component {
  constructor(props) {
    super();

    this.state = {
      page : 1,
      redirectHome: false
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nextPage() {
    this.setState({ page : this.state.page + 1 });
  }

  previousPage() {
    this.setState({ page : this.state.page - 1 });
  }

  handleSubmit(info) {
    info.example = this.props.code;
    this.props.addNewResource(info);

    this.setState({ 
      redirectHome: true
    });
  }

  componentWillMount() {
    this.props.loadTopics();
  }
  
  render() {
    const { page } = this.state;

    return (
      <div className="stage-form">
        {
          this.state.redirectHome 
          ? <Redirect to="/" />
          : null         
        }

        <div className="header">
          Add New Resource
        </div>
        {
          page === 1 && 
          <FirstPage 
            nextPage={ this.nextPage } />
        }
        {
          page === 2 &&
          <SecondPage
            nextPage={ this.nextPage }
            previousPage={ this.previousPage } 
            topicsList={ this.props.topicsList }/>
        }
        {
          page === 3 &&
          <ThirdPage
            redirectHome={ this.redirectHome }
            previousPage={ this.previousPage }
            onSubmit={ this.handleSubmit } />
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    topicsList : state.topicsList,
    code : state.code
  };
}

const mapDispatchToProps = dispatch => {
  return {
    loadTopics : ()  => {
      dispatch(loadTopics());
    },
    addNewResource : info => {
      dispatch(addNewResource(info));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageForm)