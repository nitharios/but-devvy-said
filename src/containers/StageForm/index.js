import React , {Component} from 'react';
import PropTypes from 'prop-types';
import StageForm2 from './stage2Form';
import StageForm3 from './stage3Form';
import StageForm4 from './stage4Form';

class StageForm extends Component {
  constructor(props){
    super(props);

    //state and page bindings
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page:1,
    };
  } //constructor end ---!!!!

  // handlers for form
  nextPage(){
    this.setState({ page: this.state.page + 1});
  }

  previousPage(){
    this.setState({ page: this.state.page - 1});
  }

  render(){
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div className="stage-form">
       
        {page === 1 && <StageForm2 onSubmit={this.nextPage} />}
        {page === 2 &&
          <StageForm2
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />}
        {page === 3 &&
          <StageForm3
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />}
      </div>
    );
  }
}

StageForm.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
};

export default StageForm;











