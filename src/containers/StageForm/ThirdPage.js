import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formField from '../../components/formfield.component';
import validate from '../../components/validate.component';

/*STYLES*/
import './ThirdPage.css';

const ThirdPage = props => {
  const { handleSubmit, pristine, previousPage, submitting } = props;

  return (
    <form className="ThirdPage" onSubmit={ handleSubmit }>
      <div className="ThirdPage-fields"> 
        <div className="ThirdPage-label">Notes</div>
        <Field 
          component="textarea"
          rows={10}
          name="note"
          placeholder="Add your notes here.."
        />

        <div className="ThirdPage-label">Examples</div>
        <Field
          className="ThirdPage-example-box"
          component="textarea"
          rows={10}
          name="example" 
          placeholder="Add code snippet here.." 
        />

        <div className="ThirdPage-label">Link</div>
        <Field
          component={ formField } 
          name="link" 
          type="text" />
      </div>

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
  forceUnregisterOnUnmount : true, 
  validate,
})(ThirdPage);
