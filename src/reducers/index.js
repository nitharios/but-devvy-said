import { combineReducers } from 'redux';
import TopicsReducer from './reducer_topic';
import ActiveTopic from './reducer_active_topic';


const rootReducer = combineReducers({
  topics: TopicsReducer,
  ActiveTopic: ActiveTopic
});

export default rootReducer;
