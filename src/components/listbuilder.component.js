import React from 'react';
import Highlight from 'react-highlight';

export default ({ informationList, type, label }) => {
  
  return(    
    <div id={ type }>
      { 
        informationList
        .map((info, idx) => {          
          return( 
            <div key={ idx }>
              <div className="resource-title">{ info.title }</div>
              { type === 'link'
                ? <Highlight className="markdown">
                    <div>
                     <a href={ info[type] }>
                      { info[type] }
                      </a>
                    </div>
                  </Highlight>
                : <div> 
                    { type === 'example'
                      ? <Highlight className="js">
                          <div>{ info[type] }</div>
                        </Highlight>
                      : <Highlight className="markdown">
                          <div>{ info[type] }</div>
                        </Highlight>
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