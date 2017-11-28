import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formField from '../../components/formfield.component';
import validate from '../../components/validate.component';

const SecondPage = props => {
  const { nextPage, previousPage, pristine, submitting, topicsList } = props;

  return (
    <form onSubmit={ nextPage }>
      <div>
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
      <div>
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
