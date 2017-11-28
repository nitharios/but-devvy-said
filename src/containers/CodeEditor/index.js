import React, { Component } from 'react';

/*CODEMIRROR*/
import CodeMirror from 'react-codemirror';
import "../../../node_modules/codemirror/lib/codemirror.css";
import '../../../node_modules/codemirror/mode/javascript/javascript';
import '../../../node_modules/codemirror/mode/markdown/markdown';
import '../../../node_modules/codemirror/mode/css/css';

/*STYLES*/
import './CodeEditor.css';

class CodeEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      code : '',
      mode : 'javascript',
      readOnly : false
    };

    this.updateCode = this.updateCode.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.toggleReadOnly = this.toggleReadOnly.bind(this);
  }

  updateCode(newCode) {
    this.setState({code : newCode});
  }

  changeMode(e) {
    let mode = e.target.value;
    this.setState({
      mode : mode
    });
  }

  toggleReadOnly () {
    this.setState({
      readOnly : !this.state.readOnly
    }, () => this.refs.editor.focus());
  }

  render() {
    console.log('CodeEditor render');

    const options = {
      lineNumbers : true,
      readOnly : this.state.readOnly,
      mode : this.state.mode
    };

    return (
      <div className="CodeEditor">

        <CodeMirror ref="editor"
          name="example" 
          value={this.state.code} 
          onChange={this.updateCode}
          options={options} 
          autoFocus={true}
        />

        <div className="CodeEditor-options">
          <select onChange={this.changeMode} value={this.state.mode}>
            <option value="markdown">Markdown</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </select>
          <button onClick={this.toggleReadOnly}>Read-Only Mode is {this.state.readOnly ? 'ON' : 'OFF'}</button>
        </div>

      </div>
    );
  }


}
//end class

export default CodeEditor;