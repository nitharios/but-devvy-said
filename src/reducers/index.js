import { combineReducers } from 'redux';
import topicsList from './topics.reducer';

const rootReducer = combineReducers({
  topicsList : topicsList
});

export default rootReducer;
