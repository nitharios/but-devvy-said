import React from 'react';

export default ({ defaultValue, list, name, onChange ,type }) => {
  return (
    <div className="select-options">
      <select 
        name={ name } 
        onChange={ onChange }
        defaultValue={ defaultValue } >

        {
          list.map((option, idx) => {
            return(
              <option 
                value={ option.id }
                key={ idx } >
                { option[type] }
              </option>
            ) 
          })
        }
      </select>
    </div>
  )
}