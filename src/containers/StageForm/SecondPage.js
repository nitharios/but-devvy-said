import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderFormField from './renderFormField';
import validate from '../../components/formValidation';

const renderError = ({ meta: { touched, error } }) => {
  return(
    touched && error 
    ? <div>{error}</div> 
    : false
  )
}

const SecondPage = props => {
  const { nextPage, previousPage, submitting, pristine } = props;

  return (
    <form onSubmit={ nextPage }>
      <div>
        <Field
          component={ renderFormField }
          label="Title"
          name="title"
          placeholder="Input a title"
          type="text" />
        <Field
          component={ renderFormField }
          label="Topic"
          name="topic"
          placeholder="Choose a topic"
          type="text" />
      </div>
      <div>
        <input 
          disabled={ pristine || submitting }
          type="submit" 
          value="Next" />
        <input 
          type="button" 
          onClick={ previousPage }
          value="Back" />
      </div>
    </form>
  );
};

export default reduxForm({
  form : 'stageform',                 
  destroyOnUnmount : false,
  forceUnregisterOnUnmount : true,
  validate,
})(SecondPage);
