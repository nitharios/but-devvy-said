import React from 'react';
import Highlight from 'react-highlight';

export default ({ informationList, type, label }) => {
  
  return(    
    <div className="information" id={ type }>
      <div className="info-header">{ label }</div>
      { 
        informationList
        .map((info, idx) => {          
          return( 
            <div key={ idx }>
              { type === 'links'
                ? <div>
                   <a href={ info[type] }>
                    { info[type] }
                    </a>
                  </div>
                : <div> 
                    { type === 'examples'
                      ? <Highlight className="js">
                          <div>{ info[type] }</div>
                        </Highlight>
                      : <div>{ info[type] }</div>
                    }
                  </div>
              }
            </div>
          )
        })
      }
    </div>
  );
};