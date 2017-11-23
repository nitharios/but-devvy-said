import React from 'react';

export default ({ informationList, type, id }) => {
  return(    
    <div className="information" id={ id }>
      { 
        informationList
        .map((info, idx) => {          
          return(
            <div key={ idx }>
              <div>{ info.title || type }</div>
              <div>{ info[type] }</div>
            </div>
          )
        })
      }
    </div>
  );
};