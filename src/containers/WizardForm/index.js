import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*CHILD COMPONENTS*/
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';

class WizardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page : 1
    };

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  } 

  nextPage() {
    this.setState({page : this.state.page + 1});
  }

  previousPage() {
    this.setState({page : this.state.page - 1});
  }

  handleSubmit(event) {
    console.log('Hey it worked.');
  }

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
//end class

export default WizardForm;











