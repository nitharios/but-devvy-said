//HTML input tag dummy component
//Fed into redux-form Field component
import React from 'react';

export default ({ input, placeholder, type, meta : { touched, error } }) => {
  console.log('formField render');

  return (
    <div>
      <input { ...input } placeholder={ placeholder } type={ type } />
        { touched && error && <div className="error-msg"><img src='/assets/error.png' alt='' /><span>{ error }</span></div> }
      </div>
  );
};