import React, { Component } from 'react';
import Nav from 'components/nav.components';
import { connect } from 'react-redux';



class App extends Component {
  componentDidMount(){

  }
} 

render() {
  return(
    <Nav />
    <div id='app'>
      <h3>this is the new devvy page </h3>
    </div>
  );
}

export default App;