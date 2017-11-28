import React from 'react';
import { Field, reduxForm } from 'redux-form';

/*COMPONENTS*/
import renderFormField from './renderFormField';
import textField from './textField';
import validate from '../../components/formValidation';

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
    <form onSubmit={ handleSubmit }>
      <div> 
        <div>Note</div>
        <Field 
          component="textarea" 
          label="Note"
          name="note" 
          placeholder="Add your notes here"
          type="text" />
        <div>Example</div>
        <Field
          component="textarea" 
          label="Example"
          name="example" 
          placeholder="Add your example here" 
          type="text" />
        <Field 
          component={ renderFormField } 
          label="Link"
          name="link" 
          placeholder="Add your link here"
          type="text" />
      </div>

      <div>
        <input 
          disabled={ pristine || submitting }
          type="submit" 
          value="Submit" />
        <input 
          type="button" 
          onClick={ previousPage } 
          value="Back" />
      </div>

    </form>
  );

};
//end class

export default reduxForm({
  form : 'stageform',               
  destroyOnUnmount : false,       
  forceUnregisterOnUnmount : true, 
  validate,
})(ThirdPage);
