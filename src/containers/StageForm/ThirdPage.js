import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formField from '../../components/formfield.component';

import CodeEditor from '../CodeEditor';
import TagInput from '../TagInput';

const ThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <div className="formPage" id="thirdPage">
      <form onSubmit={ handleSubmit }>
        <div className="formField">
          <label>Notes</label>
          <Field 
            component="textarea"
            name="note"
            placeholder="Add your notes here.." />
        </div>

        <div className="formField">
          <label>Code Snippet</label>
          <Field
            component={CodeEditor}
            name="example" />
        </div>
          
        <div className="formField link">
          <label>Link</label>
          <Field
            component={ formField } 
            name="link"
            placeholder="Enter a URL" 
            type="text" />
        </div>

        <TagInput />

        <div>
          <input
            className="button"
            disabled={ pristine || submitting }
            type="submit" 
            value="Submit" />
          <input 
            className="button"
            type="button" 
            onClick={ previousPage } 
            value="Back" />
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form : 'stageform',               
  destroyOnUnmount : true,       
  forceUnregisterOnUnmount : true
})(ThirdPage);