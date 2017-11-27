import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import showResults from '../../components/showResults.component';
// import {connect} from 'redux';

class StageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page : 1,
      // firstName: '',
      // lastName: '',
      // notes: '',
    };

    // this.submit = (values) => {
    //   console.log('Submission Master Page');
    //   console.log(values)
    // };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  } 

  componentWillMount(){
    console.log('mounter');
  }

  nextPage() {
    this.setState({page : this.state.page + 1});
  }

  previousPage() {
    this.setState({page : this.state.page - 1});
  }

  // handleSubmit(e) {
  //   console.log('Hey it worked.');
  //     // preventDefault(e)
  //   let formData = new FormData();
  //   formData.append('firstName', this.state.firstName);
  //   formData.append('lastName', this.state.lastName);
  //   formData.append('notes', this.state.notes);
  // }

  

  render() {
    console.log('StageForm1 render');
    console.log(this.props);

    let page = this.state.page;
   
    return (
      <div className="stage-form">
       
        {
          page === 1 && <FirstPage nextPage={this.nextPage} />
        }

        {
          page === 2 &&
          <SecondPage
            previousPage={this.previousPage}
            nextPage={this.nextPage}
          />
        }

        {
          page === 3 &&
          <ThirdPage
            previousPage={this.previousPage}
            onSubmit={this.handleSubmit}
          />
        }

      </div>
    );
  }
}
//end component

export default StageForm;


//<form onSubmit={handleSubmit(this.myOwnFunction)}>. handleSubmit has to be provided trough the props: const { handleSubmit } = this.props.





