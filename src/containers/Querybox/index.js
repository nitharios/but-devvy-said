// query box for devvy'

import React, { Component } from 'react';

class QueryBox extends Component {
  constructor(){
    super();
    
    this.setStat = ({
      querybox: '',
      error: ''
    });
  }

  
  render(){
    return(
      <div className="main-display-box-container">
        <div className="main-display-box-">
          <textarea name="description" value="query results">  
            This is the display portion of devvy
          </textarea>
        </div>
      </div>
      );
  }
}

export default QueryBox;
