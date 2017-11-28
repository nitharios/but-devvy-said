// Handles Component rendering for fields on forms

import React from 'react';

const renderFormField = ({ placeholder, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input placeholder={placeholder} type={type} />
      { touched && error && <span>{ error }</span>}
    </div>
  </div>
);

export default renderFormField;