import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderFormField from './renderFormField';
import validate from '../../components/formValidation';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const SecondPage = props => {
  const { nextPage, previousPage } = props;

  return (
    <form onSubmit={nextPage, previousPage}>

      <div>
        <Field 
          name="cohort"
          type="number"
          component={renderFormField}
          label="DevLeague Cohort"
          placeholder="Enter Cohort #.."
        />
      </div>

      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next" onClick={nextPage}>Next</button>
      </div>

    </form>
  );
};



export default reduxForm({
  form: 'stageform',                 
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(SecondPage);
