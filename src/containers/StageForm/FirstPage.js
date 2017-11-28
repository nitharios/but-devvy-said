import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formField from '../../components/formfield.component';
import validate from '../../components/validate.component';

const FirstPage = props => {
  const { nextPage } = props;

  return (
    <form onSubmit={ nextPage }> 
      
      <div>
        <Field
          component={ formField }
          label="Name"
          name="name"
          placeholder="(optional)"
          type="text" />
        <Field
          component={ formField }
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
