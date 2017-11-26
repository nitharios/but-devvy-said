import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from '../../components/formValidation';
import renderFormField from './renderFormField';

const StageForm2 = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="firstName"
        type="text"
        component={renderFormField}
        label="First Name"
      />
      <Field
        name="lastName"
        type="text"
        component={renderFormField}
        label="Last Name"
      />
      <div>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'stageform', //<------ same form name
  destroyOnUnmount: false, //<------ Preserves form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(StageForm2);
