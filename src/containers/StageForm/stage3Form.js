import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import validate from './validate';
import renderFormField from './renderFormField';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const StageForm3 = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="email" type="email" component={renderFormField} label="Email" />
      <div>
        <label>resources</label>
        <div>
          <label>
            <Field name="resources" component="input" type="radio" value="male" />
            {' '}
            Notes
          </label>
          <label>
            <Field name="resources" component="input" type="radio" value="female" />
            {' '}
            Example
          </label>
          <Field name="resources" component={renderError} />
        </div>
      </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>
          Previous
        </button>
        <button type="submit" className="next">Next</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'stageform', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  // validate,
})(StageForm3);
