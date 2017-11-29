import React, { Component } from 'react';

/*QUILL*/
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../node_modules/react-quill/dist/quill.snow.css'

/*STYLES*/
import './TextEditor.css';

class TextEditor extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text : ''
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(value) {
    this.setState({ text: value });
  }

  render() {
    console.log('TextEditor render');
    return (
      <div>
        <ReactQuill
          theme="snow"
          value={this.state.text}
          onChange={this.handleChange} 
        />
      </div>
    );
  }
  
}
//end class

export default TextEditor;