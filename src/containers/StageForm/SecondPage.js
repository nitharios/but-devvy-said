import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formField from '../../components/formfield.component';
import validate from '../../components/validate.component';

const SecondPage = props => {
  const { nextPage, previousPage, pristine, submitting, topicsList } = props;

  return (
    <form className="SecondPage" onSubmit={ nextPage }>
    
      <div className="SecondPage-fields">
        
        <div className="center-helper">
          <div className="SecondPage-fields-title">
            <label>Title</label>
            <Field
              component={ formField }
              name="title"
              placeholder="required"
              type="text" />
          </div>
        </div>

        <div className="center-helper">
          <div className="SecondPage-fields-topic">
            <label>Select a Topic</label>
            <Field
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
        </div>

      </div>

      <div className="SecondPage-submit">
        <input 
          disabled={ pristine || submitting }
          type="submit" 
          value="Next" />
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
  validate
})(SecondPage);
