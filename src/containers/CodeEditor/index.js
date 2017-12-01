import React, { Component } from 'react';
import { connect } from 'react-redux';

/*ACTIONS*/
import { addCode } from '../../actions/code.actions';

/*CODEMIRROR*/
import CodeMirror from 'react-codemirror';
import "../../../node_modules/codemirror/lib/codemirror.css";
import '../../../node_modules/codemirror/mode/javascript/javascript';
import '../../../node_modules/codemirror/mode/markdown/markdown';
import '../../../node_modules/codemirror/mode/css/css';

class CodeEditor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode : 'javascript',
      readOnly : false
    };

    this.updateCode = this.updateCode.bind(this);
    this.changeMode = this.changeMode.bind(this);
    this.toggleReadOnly = this.toggleReadOnly.bind(this);
  }

  componentWillUnmount() {
    this.setState({
      mode : 'javascript',
      readOnly : false
    });
  }

  updateCode(newCode) {
    this.props.addCode(newCode);
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
      lineSeparator : "\n",
      indentUnit : 3,
      tabSize : 3,
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
          autoFocus={false} 
          autoSave={true}
        />

        <div className="CodeEditor-options">
          <select className="select-option" onChange={this.changeMode} value={this.state.mode}>
            <option value="markdown">Markdown</option>
            <option value="css">CSS</option>
            <option value="javascript">JavaScript</option>
          </select>
          <button className="button" onClick={this.toggleReadOnly}>Read-Only {this.state.readOnly ? 'ON' : 'OFF'}</button>
        </div>

      </div>
    );
  }


}
//end class

const mapDispatchToProps = (dispatch) => {
  return {
    addCode : (newCode) => {
      dispatch(addCode(newCode));
    }
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CodeEditor);