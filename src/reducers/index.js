import { combineReducers } from 'redux';

import examplesList from './example.reducer';
import notesList from './note.reducer';
import resourcesList from './resource.reducer';
import topicsList from './topic.reducer';
import singleTopic from './single-topic.reducer';

export default combineReducers({
  examplesList,
  notesList,
  resourcesList,
  topicsList,
  singleTopic
});