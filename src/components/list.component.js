import React from 'react';

const List = ({ informationList, type, className, id }) => {
  {
    return(
      <div className={ className } id={ id }>
        { 
          informationList
          .map(info => {
            
          })
        }
      </div>
    );
  }
};