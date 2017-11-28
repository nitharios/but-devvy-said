import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formField from '../../components/formfield.component';
import validate from '../../components/validate.component';

const SecondPage = props => {
  const { nextPage, previousPage, submitting, pristine } = props;

  return (
    <form onSubmit={ nextPage }>
      <div>
        <Field
          component={ formField }
          label="Title"
          name="title"
          placeholder="Input a title"
          type="text" />
        <Field
          component={ formField }
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
