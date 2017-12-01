import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formField from '../../components/formfield.component';

import CodeEditor from '../CodeEditor';
import TagInput from '../TagInput';

/*STYLES*/
import './ThirdPage.css';

const ThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <form className="ThirdPage" onSubmit={ handleSubmit }>
      <div className="ThirdPage-fields">
      
        <div className="ThirdPage-label">Notes</div>
        {/*<Field 
          component={TextEditor}
          name="note"
        />*/}
        <Field 
          component="textarea"
          rows={10}
          name="note"
          placeholder="Add your notes here.."
        />

        <div className="ThirdPage-label">Code Snippet</div>
        <Field
          component={CodeEditor}
          name="example"
        />
        
        <div className="ThirdPage-label">Link</div>
        <Field
          component={ formField } 
          name="link"
          placeholder="Enter a URL.." 
          type="text" />

      </div>

      <TagInput />

      <div className="ThirdPage-submit">
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

export default reduxForm({
  form : 'stageform',               
  destroyOnUnmount : false,       
  forceUnregisterOnUnmount : true
})(ThirdPage);