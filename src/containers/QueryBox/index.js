import React, { Component } from 'react';
import redux from 'react-redux';

class QueryBox extends Component {

  constructor() {
    super();
    
    this.setState = ({
      querybox: '',
      error: ''
    });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
   this.setState({ term: e.target.value});
  }
  
  render() {

    return (
      <div className="main-display-box-container">
        <div className="main-display-box-">
          <textarea name="description" value={this.QueryBox}>  
            {this.querybox}
          </textarea>
        </div>
      </div>
    );

  }



}
//end class

export default QueryBox;
