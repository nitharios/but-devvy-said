import React from 'react';

import '../containers/StageForm/ThirdPage.css';

// Handles Component rendering for fields on forms
export default ({ input, placeholder, type }) => {
  console.log('formField render');
  console.log(input);
  console.log(type);
  
  return (
    <div>
      <input { ...input } placeholder={ placeholder } type={ type } />
    </div>
  );


};