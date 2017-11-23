import React from 'react';

export default ({ informationList, type, id }) => {
  return(
    <div className="information" id={ id }>
      { 
        informationList
        .map(info => {
          return(
            <div>
              <div>{ info.title || type }</div>
              <div>{ info[type] }</div>
            </div>
          )
        })
      }
    </div>
  );
};