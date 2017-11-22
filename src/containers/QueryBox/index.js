import React, { Component } from 'react';

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


export default QueryBox;
