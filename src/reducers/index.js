import { combineReducers } from 'redux';

import examplesList from './example.reducer';
import notesList from './note.reducer';
import resourcesList from './resource.reducer';
import topicsList from './topic.reducer';
import singleTopic from './single-topic.reducer';
import { reducer as reduxFormReducer } from 'redux-form';


export default combineReducers({
  examplesList,
  notesList,
  resourcesList,
  topicsList,
  singleTopic,
  form: reduxFormReducer
});