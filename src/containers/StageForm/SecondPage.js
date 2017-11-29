import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formField from '../../components/formfield.component';
import validate from '../../components/validate.component';

/*STYLES*/
import './SecondPage.css';

const SecondPage = props => {
  const { nextPage, previousPage, pristine, submitting, topicsList } = props;

  return (
    <form className="SecondPage" onSubmit={ nextPage }>
      <div className="SecondPage-fields">
        <Field
          component={ formField }
          label="Title"
          name="title"
          placeholder="Input a title"
          type="text" />

        <div>Select a Topic</div>
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
  validate,
})(SecondPage);
