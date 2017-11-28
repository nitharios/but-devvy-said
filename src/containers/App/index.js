import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Accordion, AccordionItem } from 'react-sanfona';
import { query } from '../../actions/query.actions';
import ListBuilder from '../../components/listbuilder.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      devvyText : '',
      userText : '',
      userQuery : ''  
    };

    this.handleClear = this.handleClear.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClear(e) {
    this.setState({ userQuery : '' });
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name] : value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let query = { userQuery : this.state.userQuery };

    this.props.query(query);
    this.setState({ userQuery : '' });
  }
 
  render() {    
    return(
      <div id="app">
        <div id="banner"></div>

        <div id="welcome-msg">
          Hello, my name is Devvy Cho!
        </div>

        <div id="text-box">
          <input
            id="text-input"
            onChange={ this.handleChange }
            name="userQuery"
            placeholder="How can I help you?"
            type="text" 
            value={ this.state.userQuery } />
        </div>

        <div id="button-box">
          <input
            className="button"
            id="go-button"
            onClick={ this.handleSubmit } 
            type="button"
            value="GO" />
          <input
            className="button"
            id="clear-button"
            onClick={ this.handleClear }
            type="button"
            value="CLEAR" />
        </div>

        { this.props.singleTopic.name
          ? <div className="response-box">This is the information I have!</div>
          : <div className="response-box">Sorry! I don't have any info on that</div>
        }

        <Accordion allowMultiple={ true }>
          <AccordionItem title='Examples'>
            <ListBuilder
              informationList={ this.props.resourcesList }
              label="Examples"
              type="example" />
          </AccordionItem>
          <AccordionItem title='Notes'>
            <ListBuilder
              informationList={ this.props.resourcesList }
              label="Notes"
              type="note" />
          </AccordionItem>
          <AccordionItem title='Links'>
            <ListBuilder
              informationList={ this.props.resourcesList }
              label="Links"
              type="link" />
          </AccordionItem>
        </Accordion>


{/*        <Tabs id="information-box" defaultIndex={ 0 }>
          <TabList id="tab-list">
            <Tab className="information-tab">Examples</Tab>
            <Tab className="information-tab">Notes</Tab>
            <Tab className="information-tab">Links</Tab>
          </TabList>
          
          <TabPanel className="information">
            <ListBuilder
              informationList={ this.props.resourcesList }
              label="Examples"
              type="example" />
          </TabPanel>
          <TabPanel className="information">
            <ListBuilder
              informationList={ this.props.resourcesList }
              label="Notes"
              type="note" />
          </TabPanel>
          <TabPanel className="information">
            <ListBuilder
              informationList={ this.props.resourcesList }
              label="Links"
              type="link" />
          </TabPanel> 
        </Tabs>*/}
      </div>
    );
  }
}

// maps store state to local props
const mapStateToProps = state => {  

  return {
    resourcesList : state.resourcesList,
    singleTopic : state.singleTopic
  }
}

const mapDispatchToProps = dispatch => {
  return {
    query : input => {
      dispatch(query(input));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)