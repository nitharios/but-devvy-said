import React, {Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from  'redux';
//  !!!!---will need actions to support a call to nigel and the web___!!!
// *import {action to nigle} from night 
// *import { action from devvy} form devvy 
// *----------------------------------


class InputBar extends Component {
  constructor(){
    super();

  // set state
this.state = { term: ''};
  // binding actions 
this.onInputChange = this.onInputChange.bind(this);
this.onFormSubmit = this.onFormSubmit.bind(this);
 
 }

 onInputChange(e) {
  this.setState({ term: e.target.value});
 }

 onFormSubmit(e) {
  e.preventDefault();

  this.setState({ term: this.target.value});
 }

render(){
  return(
    <form onSubmit={this.onFormSubmit}className="query-bar">
      <input 
        placeholder= "Ask devvy Cho~!"
        className="form"
        value={this.state.term}
        onChange={this.onInputChange}
      />
      <span className="query-button">
        <button type="submit" className="submit-btn"> Ask~!</button>
      </span>
    </form>
  );
}

} // end of class

export default InputBar;