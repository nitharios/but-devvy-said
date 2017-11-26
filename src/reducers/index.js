import { combineReducers } from 'redux';

import resourcesList from './resource.reducer';
import topicsList from './topic.reducer';
import singleTopic from './single-topic.reducer';

export default combineReducers({
  resourcesList,
  topicsList,
  singleTopic
});