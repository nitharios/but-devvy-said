/*This is for our last page in the WizardForm. This is a large text area where students put bullet points for notes, and code snippets for examples.*/

import React from 'react';

const textField = ({ placeholder, label }) => {
  console.log('textField render');
  return (
    <div>
      <label>{label}</label>
      <div>
        <textarea placeholder={placeholder} rows={4} cols={50}></textarea>
      </div>
    </div>
  );

}//end component

export default textField;

