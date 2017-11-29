import React from 'react';
import Highlight from 'react-highlight';

export default ({ informationList, type, label }) => {
  
  if (informationList.length < 1) {
    return(
      <div id={ type }>
        <h3 className="resource-title">
          Sorry! No { label } exists!
        </h3>
      </div>
    )
  }

  return(    
    <div id={ type }>
      { 
        informationList
        .map((info, idx) => {          
          return( 
            <div key={ idx }>
              <h3 className="resource-title">{ info.title }</h3>
              { type === 'link'
                ? <div className="markdown">
                    <a href={ info[type] }>
                      { info[type] }
                    </a>
                  </div>
                : <div> 
                    { type === 'example'
                      ? <Highlight className="js">
                          { info[type] }
                        </Highlight>
                      : <div className="markdown">
                          { info[type] }
                        </div>
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