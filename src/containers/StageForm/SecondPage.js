import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderFormField from './renderFormField';
import validate from '../../components/formValidation';

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const SecondPage = props => {
  console.log('SecondPage render');
  console.log(props);

  const { nextPage, previousPage } = props;

  return (
    <form onSubmit={nextPage, previousPage}>
      <Field name="email" type="email" component={renderFormField} label="Email" />
      <div>
        <label>resources</label>
        <div>
          <label>
            <Field name="resources" component="input" type="radio" value="notes" />
            {' '}
            Notes
          </label>
          <label>
            <Field name="resources" component="input" type="radio" value="example" />
            {' '}
            Example
          </label>
           <label>
            <Field name="resources" component="input" type="radio" value="links" />
            {' '}
            Links
          </label>
          <label>
            <Field name="resources" component="input" type="radio" value="all" />
            {' '}
            All 3
          </label>
          <Field name="resources" component={renderError} />
        </div>
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
