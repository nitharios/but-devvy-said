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
      page: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  } //constructor end ---!!!!

  // handlers for form
  nextPage(){
    this.setState({ page: this.state.page + 1 });
  }

  previousPage(){
    this.setState({ page: this.state.page - 1 });
  }

  handleSubmit(){
    // preventDefault();
    // onSubmit();
  }

  render(){
    const { onSubmit } = this.props;
    const { page } = this.state;
    console.log(this.props, " THESE ARE THE POPS")
    console.log(onSubmit, " THESE ARE THE defined props POPS")
    return (
      <div className="stage-form">
       
        {page === 1 && <StageForm2 onSubmit={ this.nextPage }/>}

        {page === 2 &&
          <StageForm3
            previousPage={ this.previousPage }
            onSubmit={ this.nextPage }
          />}
          
        {page === 3 &&
          <StageForm4
            previousPage={ this.previousPage }
            onSubmit={ this.onSubmit }
          />}
      </div>
    );  //{ handleSubmit, pristine, previousPage, submitting }
  }
}

// StageForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default StageForm;











