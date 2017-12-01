import React from 'react';
import { Field, reduxForm } from 'redux-form';
import formField from '../../components/formfield.component';

const FirstPage = props => {
  const { nextPage } = props;

  return (
    <div className="formPage">
      <form onSubmit={ nextPage }> 
        
        <div className="formField">
          <label>Name</label>
            <Field
              component={ formField }
              name="name"
              placeholder="(optional)"
              type="text" />
        </div>
        <div className="formField">
          <label>Cohort</label>
          <Field
            component={ formField }
            name="cohort"
            placeholder="(optional)"
            type="number" />
        </div>

        <div>
          <input
            className="button"
            type="submit" 
            value="Next" />
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  // same form name
  form : 'stageform',
  // preserves form data
  destroyOnUnmount : false,
  // unregister fields on unmount
  forceUnregisterOnUnmount : true
})(FirstPage);
