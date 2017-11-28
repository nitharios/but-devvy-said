import React from 'react';

import '../containers/StageForm/ThirdPage.css';

// Handles Component rendering for fields on forms
export default ({ input, label, placeholder, type, meta: { touched, error } }) => (
  <div>
    <div>{ label }</div>
    <div>
      <input { ...input } placeholder={ placeholder } type={ type } />
      { touched && error && <span>{ error }</span>}
    </div>
  </div>
);