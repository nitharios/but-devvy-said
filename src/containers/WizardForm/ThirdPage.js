import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderFormField from './renderFormField';
import validate from '../../components/formValidation';

import TagInput from '../TagInput';


const types = ['Note', 'Example', 'link' , 'All 3'];

const renderTypeSelector = ({ input, meta: { touched, error } }) => (
  <div>
    <select {...input}>
      <option value="">Select a type of Note</option>
      {types.map(val => <option value={val} key={val}>{val}</option>)}
    </select>
    {touched && error && <span>{error}</span>}
  </div>
);

const ThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <form onSubmit={handleSubmit}>

      <TagInput />

      <div>

        <Field 
          name="note" 
          type="text"
          label="Notes"
          component={renderFormField}
          placeholder="" 
        />

        <Field 
          name="example" 
          type="text" 
          label="Examples"
          component={renderFormField} 
          placeholder="Code Here.."
        />

        <Field 
          name="link" 
          type="url" 
          label="Link"
          component={renderFormField}
          placeholder="URL here.."
        />
      
      </div>

      <div>
        <button type="button" className="previous" onClick={previousPage} >
          Previous
        </button>
        <button type="submit" disabled={ pristine || submitting }>
          Submit
        </button>
      </div>

    </form>
  );
};
export default reduxForm({
  form: 'stageform',               
  destroyOnUnmount: false,       
  forceUnregisterOnUnmount: true, 
  validate,
})(ThirdPage);
