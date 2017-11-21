// query box for devvy'

import React, { Component } from 'react';

class QueryBox extends Component {
  constructor(){
    super();
    
  }
  
  render(){
    return(
      <div className="main-display-box-container">
        <div className="main-display-box-">
          <textarea rows="5" cols="20">
            this is where Devvy query results will go
          </textarea>
        </div>
      </div>
      );
  }
}

export default QueryBox;
