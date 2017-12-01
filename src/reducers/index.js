import { combineReducers } from 'redux';

import resourcesList from './resource.reducer';
import topicsList from './topic.reducer';
import singleTopic from './single-topic.reducer';
import code from './code.reducer';
// built in reducer
import { reducer as reduxFormReducer } from 'redux-form';
// --- built in

export default combineReducers({
  resourcesList,
  topicsList,
  singleTopic,
  code,
  form: reduxFormReducer
});