import React from 'react';
import { Field, reduxForm } from 'redux-form';

/*COMPONENTS*/
import renderFormField from './renderFormField';
import textField from './textField';
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

      <div>

        <Field 
          name="note" 
          type="text"
          label="Notes"
          component={textField}
          placeholder="Bullets Points Here.." 
        />

        <Field 
          name="example" 
          type="text" 
          label="Examples"
          component={textField} 
          placeholder="Code Here.."
        />

        <Field 
          name="link" 
          label="Link"
          component={({ label }) => { 
            return (
              <div>
                <label>{label}</label>
                <div>
                  <input type="url" defaultValue="http://" />
                </div>
              </div>
            );
          }}/>
      
      </div>

      <TagInput />

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
