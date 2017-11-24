import React from 'react';

export default ({ informationList, type, label, id }) => {
  return(    
    <div className="information" id={ id }>
      <div className="info-header">{ label }</div>
      { 
        informationList
        .map((info, idx) => {          
          return(
            <div key={ idx }>
              <div>{ info[type] }</div>
            </div>
          )
        })
      }
    </div>
  );
};