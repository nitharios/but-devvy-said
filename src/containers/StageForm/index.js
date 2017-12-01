import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTopics } from '../../actions/topic.actions';
import { addNewResource } from '../../actions/resource.actions';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

class StageForm extends Component {
  constructor(props) {
    super();

    this.state = {
      page : 1
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
    console.log('Submit');
    console.log(info);    
    this.props.addNewResource(info);    
  }

  componentWillMount() {
    this.props.loadTopics();
  }
  
  render() {
    const { page } = this.state;

    return (
      <div className="stage-form">
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
            previousPage={ this.previousPage }
            onSubmit={ this.handleSubmit } />
        }
      </div>
    );
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
    addNewResource : info => {
      dispatch(addNewResource(info));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageForm)