import React from 'react';

// Handles Component rendering for fields on forms
const renderFormField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <div>{ label }</div>
    <div>
      <input { ...input } placeholder={ placeholder } type={ type } />
      { touched && error && <span>{ error }</span>}
    </div>
  </div>
);

export default renderFormField;