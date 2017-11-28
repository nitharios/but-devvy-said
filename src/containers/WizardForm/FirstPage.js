import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../components/validation.component';
import renderFormField from './renderFormField';

const FirstPage = props => {
  const { nextPage } = props;

  return (
    <form onSubmit={ nextPage }> 
      <div>
        <Field
          component={ renderFormField }
          label="Name"
          name="name"
          placeholder="(optional)"
          type="text" />
        <Field
          component={ renderFormField }
          label="Cohort"
          name="cohort"
          placeholder="(optional)"
          type="number" />
      </div>
      <div>
        <input 
          type="submit" 
          value="Next" />
      </div>
    </form>
  );

  
};

export default reduxForm({
  // same form name
  form : 'stageform',
  // preserves form data
  destroyOnUnmount : false,
  // unregister fields on unmount
  forceUnregisterOnUnmount : true,
  validate,
})(FirstPage);
