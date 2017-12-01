import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formField from '../../components/formfield.component';
import validate from '../../components/validate.component';

const SecondPage = props => {
  const { nextPage, previousPage, pristine, submitting, topicsList } = props;

  return (
    <div className="formPage">
      <form className="SecondPage" onSubmit={ nextPage }>
              
        <div className="formField">
          <label>Title</label>
          <Field
            component={ formField }
            name="title"
            placeholder="required"
            type="text" />
        </div>
        <div className="formField">
          <label>Select a Topic</label>
          <Field
            className="select-option"
            component="select"
            name="topic_id" >

            { topicsList.map((topic, idx) => {
              return(
                <option
                  key={ idx }
                  value={ topic.id } >
                  { topic.name }
                </option>
              )
            }) }

          </Field>
        </div>

        <div>
          <input
            className="button"
            disabled={ pristine || submitting }
            type="submit" 
            value="Next" />
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
  destroyOnUnmount : false,
  forceUnregisterOnUnmount : true,
  validate
})(SecondPage);
