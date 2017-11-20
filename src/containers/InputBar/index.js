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

 }

 onInputChange(e) {
  this.setState({ term: e.target.value});
 }

 onFormSubmit(e) {
  // event.preventDefault();

  // this.props.fetchNigel(this.state.term); // <--- this props will exist after nigle and devvy can query our db
  this.setState({ term: ''});
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