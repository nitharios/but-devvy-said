import React from 'react';

export default ({ informationList, type, label }) => {
  
  return(    
    <div className="information" id={ type }>
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